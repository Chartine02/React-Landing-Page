import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-white text-black z-50 fixed w-full flex items-center justify-between gap-10 py-6 px-56">
        <h1 className="font-bold text-2xl">REACT LANDING PAGE</h1>
        <div className="flex gap-8 text-neutral-600 text-base ">
          <a href="">FEATURES</a>
          <a href="">ABOUT</a>
          <a href="">SERVICES</a>
          <a href="">GALLERY</a>
          <a href="">TESTIMONIALS</a>
          <a href="">TEAM</a>
          <a href="">CONTACT</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
