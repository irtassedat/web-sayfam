import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      // localStorage'dan değeri al
      const localVal = localStorage.getItem(key);
      // Eğer değer null ise defaultValue döndür, değilse JSON olarak ayrıştırıp döndür
      return localVal !== null ? JSON.parse(localVal) : defaultValue;
    } catch (error) {
      // Ayrıştırma hatası veya başka bir hata oluşursa defaultValue döndür
      console.error("Error reading localStorage key \"" + key + "\": ", error);
      return defaultValue;
    }
  });

  const setLocalStorage = (newValue) => {
    try {
      // Yeni değeri JSON string olarak localStorage'a kaydet
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    } catch (error) {
      // localStorage'a yazma hatası oluşursa logla
      console.error("Error writing localStorage key \"" + key + "\": ", error);
    }
  };

  return [value, setLocalStorage];
}
