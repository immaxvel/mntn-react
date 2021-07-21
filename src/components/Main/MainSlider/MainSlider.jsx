import React from "react";
import './MainSlider.css'

const MainSlider = () => {
  return (
    <div className="slider">
      <a href="#body">
        <div className="start">Start</div>
      </a>
      <a href="#top-1">
        <div className="title-one">1</div>
      </a>
      <a href="#top-2">
        <div className="title-two">2</div>
      </a>
      <a href="#top-3">
        <div className="title-three">3</div>
      </a>
    </div>
  );
};

export default MainSlider;
