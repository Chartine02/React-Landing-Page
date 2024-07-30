import React from "react";
import Header from "./Header";
// import About from "./assets/about";

const About = () => {
  return (
    <div className="flex px-40 gap ">
      <div>
        <img src="/public/about.jpg" alt="" />
      </div>
      <div>
        <Header title="About Us" />
      </div>
    </div>
  );
};

export default About;
