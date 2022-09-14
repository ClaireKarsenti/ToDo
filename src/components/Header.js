import React from "react";
import Sun from "../assets/icons/icon-moon.svg";
import Moon from "../assets/icons/icon-sun.svg";

const Header = ({ themeDark, setThemeDark }) => {
  const switchThemeIcon = themeDark ? Moon : Sun;

  const changeTheme = () => {
    setThemeDark(!themeDark);
  };
  return (
    <header>
      <h1>TODO</h1>
      <button className="btn" onClick={changeTheme}>
        <img src={switchThemeIcon} alt="Theme" />
      </button>
    </header>
  );
};

export default Header;
