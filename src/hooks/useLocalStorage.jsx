import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const localVal = localStorage.getItem(key);
      if (localVal === null || localVal === "undefined") {
        return defaultValue;
      }
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
