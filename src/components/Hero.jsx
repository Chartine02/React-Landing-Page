import React from "react";
import Button from "./Button";

export const Hero = () => {
  return (
    <div>
      <div className=" bg-[url('/public/intro-bg.jpg')] h-screen ">
        <div className="text-white h-screen bg-black bg-opacity-30 absolute flex gap-6 justify-center items-center flex-col text-center  p-96 ">
          <h1 className="text-7xl font-bold">
            WE ARE A <br /> LANDING PAGE{" "}
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            earum repellendus laudantium fugiat ratione amet quasi nulla magnam
            sunt libero laborum veritatis.
          </p>
          <Button text="LEARN MORE" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
