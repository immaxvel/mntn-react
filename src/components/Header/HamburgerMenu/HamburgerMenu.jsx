import React from "react";
import MenuList from "./MenuList/MenuList";
import './HamburgerMenu.css'

const HamburgerMenu = () => {
  return (
    <div className="hamburger-menu" id="burger">
      <input
        className="menu__toggle"
        id="menu__toggle"
        type="checkbox"
      />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <MenuList />
    </div>
  );
};

export default HamburgerMenu;
