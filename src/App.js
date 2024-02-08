import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from './components/Profile';
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from './context/LanguageContext';
import { DataProvider } from './context/DataContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import { toast } from 'react-toastify';

function App() {
  const { theme } = useTheme();
  const { language, setCurrentData } = useLanguage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.post(`https://reqres.in/api/data?lang=${language}`)
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          // Dil değişikliği toast mesajı
          toast.success(`${language === 'en' ? 'English' : 'Türkçe'} selected!`);
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
        <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
          <Header />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
          <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
