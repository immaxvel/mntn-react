import React from "react";
import styles from "./MenuList.module.css";
import Profile from "./Profile/Profile";

const menu = ["Equipment", "About us", "Blog"];

const MenuList = () => {
  return (
    <ul className={styles.nav}>
      {menu.map((i) => (
        <li key={i}>
          <a href="/#" >
            {i}
          </a>
        </li>
      ))}
      <Profile />
    </ul>
  );
};

export default MenuList;
