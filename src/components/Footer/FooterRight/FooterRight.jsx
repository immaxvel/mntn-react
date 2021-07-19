import React from "react";
import "./FooterRight.css";

let blog = [
  "About MNTN",
  "Contributors & Writers",
  "Write For Us",
  "Contact Us",
  "Privacy Policy",
];
let more = [
    "The Team",
     "Jobs",
      "Press"
];

const FooterRight = () => {
  return (
    <div className="links">
      <ul className="blog">
        More on The Blog
        {blog.map((i) => (
          <a href="#">
            <li key={i}>{i}</li>
          </a>
        ))}
      </ul>

      <ul className="more">
        More on MNTN
        {more.map((i) => (
          <a href="#">
            <li key={i}>{i}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default FooterRight;
