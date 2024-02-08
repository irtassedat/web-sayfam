import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from './components/Profile';
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { DataProvider } from './context/DataContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();
  const { language } = useLanguage(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.post(`https://reqres.in/api/data?lang=${language}`)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          toast.success(`${language === 'en' ? 'English' : 'Türkçe'} selected!`);
          // setCurrentData ile API'den gelen veriyi duruma kaydetme işlemi yapılabilir
          // setCurrentData(res.data); 
        }, 2000);
      })
      .catch((error) => {
        console.error("API request error:", error);
        setLoading(false);
      });
  }, [language]);

  if (loading) {
    return (
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="loader"></div>
        <div className="loading-text">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <DataProvider>
          <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
            <Header />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
          </div>
        </DataProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
