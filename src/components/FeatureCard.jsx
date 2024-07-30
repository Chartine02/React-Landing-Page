import React from "react";

const Feature = (props) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="bg-[linear-gradient(#6372FF,#5F8DFD)] rounded-full text-center text-white p-8 text-4xl">
        {props.icon}
      </div>
      <h2>{props.title}</h2>
      <p className="text-center">{props.description}</p>
    </div>
  );
};

export default Feature;
