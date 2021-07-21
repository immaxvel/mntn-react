import React from "react";
import "./Main.css";
import MainSlider from "./MainSlider/MainSlider";
import MainSocial from "./MainSocial/MainSocial";
import MainTitle from "./MainTitle/MainTitle";

const Main = () => {
  return (
    <div className="Main">
      <MainSocial />
      <MainTitle />
      <MainSlider />
    </div>
  );
};

export default Main;
