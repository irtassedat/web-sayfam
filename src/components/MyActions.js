import React, { useEffect, useRef, useState } from "react";
import Typed from 'typed.js';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from "../context/ThemeContext";

function MyActions() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [switchText, setSwitchText] = useState("");
  const typedElement = useRef(null);

  useEffect(() => {
    setSwitchText(language === "en" ? "Türkçe'ye geç" : "Switch to English");
  }, [language]);

  return (
    <div className="fixed container mx-auto bg-header dark:bg-myDarkC py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-4">
          <div className="text-pink-500 flex justify-center items-center rounded-full px-4 py-2">
            <span ref={typedElement} className="text-l shadow-[-5px_-5px_rgba(233,37,119,1)]"></span>
          </div>
        </div>
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
    </div>
  );
}

export default MyActions;
