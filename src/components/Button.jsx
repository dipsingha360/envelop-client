import React from "react";

const Button = ({ submit, innerLabel, logout, handleLogout }) => {
  return (
    <button
      onClick={handleLogout ? handleLogout : null}
      type={submit ? "submit" : ""}
      className={` text-violet-50 py-3 px-5  rounded-lg  duration-300 ${
        logout
          ? "bg-rose-500 hover:bg-rose-700"
          : "bg-violet-500 mt-5 hover:bg-violet-700"
      }`}
    >
      {innerLabel}
    </button>
  );
};

export default React.memo(Button);
