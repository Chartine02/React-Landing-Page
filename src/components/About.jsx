import React from "react";
import Header from "./Header";
// import About from "./assets/about";

const About = () => {
  return (
    <div className="grid grid-cols-2 px-40 gap-4 py-10 ">
      <div>
        <img src="/public/about.jpg" alt="" />
      </div>
      <div className="text-start align ">
        <Header title="About Us" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <h3 className="py-6 text-2xl font-semibold">Why Choose Us?</h3>
        <ul className="text-sm ">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-2">
              <li>Lorem ipsum dolor</li>
              <li>Incididunt ut labore</li>
              <li>Lorem ipsum dolor </li>
              <li>Tempor incididunt </li>
            </div>
            <div className="flex flex-col gap-2">
              <li>Lorem ipsum dolor</li>
              <li>Incididunt ut labore</li>
              <li>Lorem ipsum dolor </li>
              <li>Tempor incididunt </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
