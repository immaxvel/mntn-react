import React from 'react'
import styles from '../HamburgerMenu/HamburgerMenu.module.css'
import MenuList from './MenuList/MenuList'



const HamburgerMenu = () => {
    return (
        <div className={`${styles["hamburger-menu"]}`} id="burger">
        <input className={styles["menu-toggle"]} id='menu-toggle' type="checkbox" />
        <label className={styles['menu-btn']} htmlFor="menu__toggle">
          <span></span>
        </label>
        <MenuList/>
      </div>
    )
}

export default HamburgerMenu
