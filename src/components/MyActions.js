import React, { useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from "../context/ThemeContext";

function MyActions() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage(); // currentLang yerine language kullanıldı
  const [switchText, setSwitchText] = useState("");

  useEffect(() => {
    // Dil değiştiğinde switchText'i güncelle
    setSwitchText(language === "en" ? "Türkçe'ye geç" : "Switch to English"); // Koşullar düzeltildi
  }, [language]); // currentLang yerine language bağımlılığı kullanıldı

  const switchLanguage = () => {
    // Dil değiştirme fonksiyonunu çağır
    toggleLanguage();
  };

  return (
    <div className="actions-container mx-auto py-8 flex justify-between items-center pr-10 bg-slate-100 dark:bg-[_#2A262B]">
      {/* Tema Değiştirme Butonu ve Dil Değiştirme Butonu */}
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="flex items-center justify-center w-12 h-6 bg-gray-300 rounded-full p-1 cursor-pointer dark:bg-gray-700">
          <div className={`w-4 h-4 bg-white rounded-full shadow-md transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}></div>
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          {theme === 'dark' ? (language === "en" ? "Light Mode" : "Gündüz Modu") : (language === "en" ? "Dark Mode" : "Gece Modu")}
        </span>
        <span>|</span>
        <button onClick={switchLanguage} className="text-red-500 cursor-pointer hover:text-red-700">
          {switchText}
        </button>
      </div>
    </div>
  );
}

export default MyActions;
