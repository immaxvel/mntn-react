import React from "react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import HeaderLogo from "./Header-logo/HeaderLogo";
import './Header.css'





const Header = () => {
    
  return (
    <div className="Header" id='header'>
      <HeaderLogo/>
      <HamburgerMenu/>
    </div>
  );
};

export default Header;
