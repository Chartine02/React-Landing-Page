import React from "react";

const Button = (props) => {
  return (
    <div className="p-12">
      <button className="bg-[linear-gradient(#6372FF,#5F8DFD)] px-8 py-3 rounded-full font-medium">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
