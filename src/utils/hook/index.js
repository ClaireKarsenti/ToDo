import { useContext } from 'react';
import { DarkModeContext } from '../context';

export function useTheme() {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext); //Allows you to retrieve the toggleTheme and theme action from the context.js file
  return { darkMode, toggleDarkMode };
}
