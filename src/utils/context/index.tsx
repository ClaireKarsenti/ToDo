import * as React from 'react';
import { useEffect, useState, createContext } from 'react';


interface DarkModeProviderTypes {
  children: any;
}

export const defaultState = {
  darkMode: true,
  toggleDarkMode: () => {},
};

export const DarkModeContext = createContext(defaultState);

export const DarkModeProvider: React.FC<DarkModeProviderTypes> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    // localStorage.setItem('darkMode', JSON.stringify(darkMode));
    setDarkMode(!darkMode);
  };

  // useEffect(() => {
  //   const localStorageDark = JSON.parse(localStorage.getItem('darkMode'));
  //   if (localStorageDark) {
  //     setDarkMode(localStorageDark);
  //   }
  // }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
