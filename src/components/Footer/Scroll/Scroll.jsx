import React from 'react'
import './Scroll.css'


//hide button arrow up when top is reached
window.addEventListener("scroll", () => {
  let scrollElem = document.getElementById("scrollToTop");
  if (window.pageYOffset > document.documentElement.clientHeight) {
    scrollElem.style.opacity = "1";
  } else {
    scrollElem.style.opacity = "0";
  }
});
//scroll to top of page
let timeOut;
let goUp = () => {
  let top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  if (top > 0) {
    window.scrollBy(0, -100);
    timeOut = setTimeout(goUp, 20);
  } else {
    clearTimeout(timeOut);
  }
};

const Scroll = () => {
    return (
        <div id="scrollToTop" onClick={goUp()}>
          <i className="fas fa-long-arrow-alt-up"></i>
        </div>
    )
}

export default Scroll
