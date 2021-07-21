import React from "react";
import TopicOne from "./TopicOne/TopicOne";
import TopicThree from "./TopicThree/TopicThree";
import TopicTwo from "./TopicTwo/TopicTwo";

const Topics = () => {
  return (
    <div className="container">
      <TopicOne />
      <TopicTwo />
      <TopicThree />
    </div>
  );
};

export default Topics;
