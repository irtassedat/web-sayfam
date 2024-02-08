import React, { createContext, useContext, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import data from '../Data/data';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // useLocalStorage ile tema tercihini yerel depolamada sakla
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme); // Yeni tema değerini yerel depolamada güncelle
    console.log(`Tema ${newTheme} olarak değiştirildi`); // Konsolda değişikliği logla
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    console.log(`Tema useEffect ile ${theme} olarak ayarlandı`); // Başlangıç temayı konsolda göster
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
