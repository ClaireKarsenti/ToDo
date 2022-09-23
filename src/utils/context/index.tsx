import * as React from 'react';
import { useEffect, useState, createContext } from 'react';


interface DarkModeProvider {
  children: any;
}

export const defaultState = {
  darkMode: true,
  toggleDarkMode: () => {},
};

export const DarkModeContext = createContext(defaultState);

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DarkModeProvider: React.FC<DarkModeProvider> = ({ children }) => {
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
