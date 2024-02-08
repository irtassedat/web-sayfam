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


// LoadingAnimation bileşenini import etmek gerekirse
// import LoadingAnimation from './components/LoadingAnimation';

function App() {
  // Context'ten gerekli durumları ve fonksiyonları kullan
  const { theme } = useTheme();
  const { language, setCurrentData } = useLanguage(); // Örnek olarak eklenmiştir, fonksiyonu ve durumu LanguageContext'e göre düzenleyin
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // API çağrısı örneği, gerçek endpoint ve data yapınıza göre düzenleyin
    axios.post(`https://reqres.in/api/data?lang=${language}`)
      .then((res) => {
        // Burada setCurrentData ya da benzeri bir fonksiyonla çekilen veriyi duruma kaydedebilirsiniz
        setLoading(false);
        // Dil değişikliği toast mesajı
        toast.success(`${language === 'en' ? 'English' : 'Türkçe'} selected!`);
      })
      .catch((error) => {
        console.error("API request error:", error);
        setLoading(false);
      });
  }, [language]); // Dil değişikliğinde useEffect tetiklenecek

  if (loading) {
    return <div>Loading...</div>; // Yükleme göstergesi
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