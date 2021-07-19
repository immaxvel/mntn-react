import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="Main">

      <div class="social">
        <p class="follow">Follow Us</p>
        <div class="social-icons">
          <a href="https://www.instagram.com/?hl=ru" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/?lang=ru" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      <div class="main">
        <div class="main-title">
          <div class="dash"></div>
          <h2 class="guide">A Hiking guide</h2>
        </div>
        <h1 class="title">
          Be prepared for the
          <br />
          Mountains and beyond!
        </h1>
        <div class="scroll">
          <a href="#footer">Scroll down</a>
          <i class="fas fa-long-arrow-alt-down"></i>
        </div>
      </div>
      
      <div class="slider">
        <a href="#body">
          <div class="start">Start</div>
        </a>
        <a href="#top-1">
          <div class="title-one">1</div>
        </a>
        <a href="#top-2">
          <div class="title-two">2</div>
        </a>
        <a href="#top-3">
          <div class="title-three">3</div>
        </a>
      </div>
    </div>
  );
};

export default Main;
