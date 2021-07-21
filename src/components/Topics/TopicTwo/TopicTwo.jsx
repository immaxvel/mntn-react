import React from "react";
import './TopicTwo.css'

const TopicTwo = () => {
  return (
    <div id="top-2" className="topic-two">
      <div className="topic-two-image">
        <img src="topic-two-image.jpg" alt="topic-two" />
      </div>
      <div className="topic-two-text">
        <div className="number-two">02</div>
        <div className="topic">
          <div className="topic-title-two">
            <div className="dash-two"></div>
            <p className="get-started-two">Hiking Essentials</p>
          </div>
          <h2 className="topic-main-two">Picking the right Hiking Gear!</h2>
          <div className="topic-info-two">
            <p>
              The nice thing about beginning hiking is that you don’t really
              need any special gear, you can probably get away with things you
              already have. Let’s start with clothing. A typical mistake hiking
              beginners make is wearing jeans and regular clothes, which will
              get heavy and chafe wif they get sweaty or wet.
            </p>
          </div>
          <div className="read-more-two">
            <p>read more</p>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopicTwo

