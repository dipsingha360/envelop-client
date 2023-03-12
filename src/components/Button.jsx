import React from "react";

const Button = ({ submit, innerLabel }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className="bg-violet-500 text-violet-50 py-3 mt-5 rounded-lg hover:bg-violet-700 duration-300"
    >
      {innerLabel}
    </button>
  );
};

export default Button;
