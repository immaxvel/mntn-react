import React from "react";
import Profile from "./Profile/Profile";
import './MenuList.css'

const menu = ["Equipment", "About us", "Blog"];

const MenuList = () => {
  return (
    <ul className="nav">
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
