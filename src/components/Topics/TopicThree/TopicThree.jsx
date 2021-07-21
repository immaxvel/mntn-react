import React from "react";
import "../TopicOne/TopicOne.css";

const TopicThree = () => {
  return (
    <div id="top-3" className="topic-one">
      <div className="topic-one-image">
        <img src="topic-three-image.jpg" alt="topic-one" />
      </div>
      <div className="topic-one-text">
        <div className="number">03</div>
        <div className="topic">
          <div className="topic-title">
            <div className="dash"></div>
            <p className="get-started">Where you go is the key</p>
          </div>
          <h2 className="topic-main">Understand Your Map & Timing</h2>
          <div className="topic-info">
            <p>
              To start, print out the hiking guide and map. If it’s raining,
              throw them in a Zip-Lock bag. Read over the guide, study the map,
              and have a good idea of what to expect. I like to know what my
              next landmark is as I hike. For example, I’ll read the guide and
              know that say, in a mile, I make a right turn at the junction..
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

export default TopicThree;
