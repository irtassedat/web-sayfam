import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const localVal = localStorage.getItem(key);
      // localStorage'dan alınan değer geçerli bir JSON stringi mi diye kontrol et
      if (localVal === null || localVal === "undefined") {
        // Geçerli bir JSON stringi değilse defaultValue kullan
        return defaultValue;
      }
      // Değer null değil ve "undefined" değilse JSON olarak ayrıştır
      return JSON.parse(localVal);
    } catch (error) {
      console.error("Error reading localStorage key \"" + key + "\": ", error);
      return defaultValue;
    }
  });

  const setLocalStorage = (newValue) => {
    try {
      if (newValue === undefined) {
        console.error("Cannot store 'undefined' value in localStorage");
        return;
      }
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    } catch (error) {
      console.error("Error writing localStorage key \"" + key + "\": ", error);
    }
  };

  return [value, setLocalStorage];
}
