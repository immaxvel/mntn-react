import React from "react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import HeaderLogo from "./Header-logo/HeaderLogo";
import styles from './Header.module.css'




const Header = () => {
    
  return (
    <div className={styles.Header}>
      <HeaderLogo/>
      <HamburgerMenu/>
    </div>
  );
};

export default Header;
