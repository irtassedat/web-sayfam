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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchAndSetLanguageData = async () => {
      try {
        const response = await axios.post(`https://reqres.in/api/users?lang=${language}`, data[language]);
        console.log('Data fetched successfully:', response.data);
        setIsLoading(false);
        
        // Sadece ilk yüklemede hoşgeldin mesajı göster
        if (isInitialLoad) {
          toast.success(`Welcome!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            className: 'bg-green-500 text-white font-bold py-2 px-4 rounded',
          });
          setIsInitialLoad(false);
        } else {
          toast.success(`${language === 'en' ? 'English' : 'Türkçe'} successfully changed!`, {
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
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    if (isInitialLoad || language) {
      fetchAndSetLanguageData();
    }

  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'tr' : 'en'));
    // Dil değişikliği sırasında isInitialLoad'u false yapıyoruz
    setIsInitialLoad(false);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
