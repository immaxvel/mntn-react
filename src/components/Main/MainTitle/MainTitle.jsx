import React from "react";
import './MainTitle.css'

const MainTitle = () => {
  return (
    <div className="main">
      <div className="main-title">
        <div className="dash"></div>
        <h2 className="guide">A Hiking guide</h2>
      </div>
      <h1 className="title">
        Be prepared for the
        <br />
        Mountains and beyond!
      </h1>
      <div className="scroll">
        <a href="#footer">Scroll down</a>
        <i className="fas fa-long-arrow-alt-down"></i>
      </div>
    </div>
  );
};

export default MainTitle;
