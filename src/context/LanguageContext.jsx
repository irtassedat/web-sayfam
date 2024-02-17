import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
import data from '../data/data'; // Veri dosyanızın yolu

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Yükleme durumu için yeni state
  
  useEffect(() => {
    setIsLoading(true); // API çağrısı başlamadan önce yükleme durumunu true olarak ayarla
    const fetchAndSetLanguageData = async () => {
      try {
        const response = await axios.post(`https://reqres.in/api/users?lang=${language}`, data[language]);
        console.log('Data fetched successfully:', response.data);
        setIsLoading(false); // Veriler başarıyla yüklendiğinde yükleme durumunu false olarak ayarla
        if (isInitialLoad) {
          toast.success(`Hoş Geldiniz!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            className: 'bg-green-500 text-white font-bold py-2 px-4 rounded',
          });
          setIsInitialLoad(false); // İlk yükleme mesajı gösterildikten sonra durumu false'a çevir
        } else {
          toast.success(`${language === 'en' ? 'English' : 'Türkçe'} başarıyla değiştirildi!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            className: 'bg-green-500 text-white font-bold py-2 px-4 rounded',
          });
        }
      } catch (error) {
        setIsLoading(false); // Hata oluştuğunda yükleme durumunu false olarak ayarla
        console.error("Error fetching data:", error);
      }
    };

    fetchAndSetLanguageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]); // `isInitialLoad` burada bilinçli olarak dahil edilmedi.

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'tr' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
