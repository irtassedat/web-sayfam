import React, { createContext, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import axios from 'axios'; 
import data from '../Data/Data'; // Data.js dosyanızı import edin

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', 'en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'tr' : 'en';
    setLanguage(newLanguage); 
    console.log(`Dil ${newLanguage} olarak değiştirildi`);

    // Data.js dosyasından gelen 'data' nesnesini Reqres API'ye gönder
    axios.post('https://reqres.in/api/users', data)
      .then(response => {
        console.log('Başarıyla gönderildi:', response.data);
        // İşlem başarılıysa burada bir şeyler yapabilirsiniz
      })
      .catch(error => {
        console.error('Veri gönderirken hata oluştu:', error);
        // Hata yönetimi
      });
  };

  useEffect(() => {
    console.log(`Dil useEffect ile ${language} olarak ayarlandı`);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
