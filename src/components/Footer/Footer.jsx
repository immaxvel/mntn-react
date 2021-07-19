import React from "react";
import Scroll from "./Scroll/Scroll";
import "./Footer.css";
import FooterLeft from "./FooterLeft/FooterLeft";
import FooterRight from "./FooterRight/FooterRight";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <FooterLeft />
        <FooterRight />
        <Scroll />
      </div>
    </div>
  );
};

export default Footer;
