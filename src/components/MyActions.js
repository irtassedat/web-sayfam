import React, { useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from "../context/ThemeContext";

function MyActions() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [switchText, setSwitchText] = useState("");

  useEffect(() => {
    setSwitchText(language === "en" ? "Türkçe'ye geç" : "Switch to English");
  }, [language]);

  return (
    <div className="actions-container mx-auto py-8 flex justify-between items-center pr-10">
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="flex items-center justify-center w-12 h-6 bg-gray-300 rounded-full p-1 cursor-pointer dark:bg-gray-700">
          <div className={`w-4 h-4 bg-white rounded-full shadow-md transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}></div>
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          {theme === 'dark' ? (language === "en" ? "Light Mode" : "Gündüz Modu") : (language === "en" ? "Dark Mode" : "Gece Modu")}
        </span>
        <span>|</span>
        <button onClick={toggleLanguage} className="text-red-500 cursor-pointer hover:text-red-700">
          {switchText}
        </button>
      </div>
    </div>
  );
}

export default MyActions;
