import { useContext } from 'react';

//@ts-expect-error
import { DarkModeContext } from '../context/index.tsx';

interface useThemeTypes {
  toggleDarkMode: () => void; //??????
  darkMode: boolean; 
}

export function useTheme() {
  const { toggleDarkMode, darkMode } =
    useContext<useThemeTypes>(DarkModeContext); //Allows you to retrieve the toggleTheme and theme action from the context.tsx file
  return { darkMode, toggleDarkMode };
}
