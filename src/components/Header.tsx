import * as React from 'react';
import Sun from '../assets/icons/icon-moon.svg';
import Moon from '../assets/icons/icon-sun.svg';

// @ts-expect-error
import { useTheme } from '../utils/hook/index.tsx';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  const switchThemeIcon = darkMode ? Moon : Sun;

  return (
    <header>
      <h1>TODO</h1>
      <button className="btn" onClick={() => toggleDarkMode()}>
        <img src={switchThemeIcon} alt="Theme" />
      </button>
    </header>
  );
};

export default Header;
