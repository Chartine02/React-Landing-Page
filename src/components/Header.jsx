import React from "react";

const Header = (props) => {
  return (
    <div className="flex flex-col justify-center p-4 gap-2 items-center">
      <h1 className="font-bold text-3xl">{props.title}</h1>
      <div className="h-1 w-12 bg-[linear-gradient(#6372FF,#5F8DFD)]"></div>
      <p className="">{props.description || ""}</p>
    </div>
  );
};

export default Header;
