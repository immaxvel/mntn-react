import React from "react";

const TopicOne = () => {
  return (
    <div id="top-1" className="topic-one">
      <div className="topic-one-image">
        <img src="topic-one-image.jpg" alt="topic-one" />
      </div>
      <div className="topic-one-text">
        <div className="number">01</div>
        <div className="topic">
          <div className="topic-title">
            <div className="dash"></div>
            <h3 className="get-started">Get Started</h3>
          </div>
          <h2 className="topic-main">What level of hiker are you?</h2>
          <div className="topic-info">
            <p>
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
          </div>
          <div className="read-more">
            <p>read more</p>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicOne;
