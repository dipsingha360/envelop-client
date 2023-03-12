import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between py-10">
      <div className="logo">
        <Link
          to="/"
          className="text-xl font-semibold hover:text-violet-500 hover:underline underline-offset-2 duration-300"
        >
          Envelop
        </Link>
      </div>
      <nav>
        <div className="flex gap-5">
          <Link
            to="/login"
            className="  hover:text-violet-500 hover:underline underline-offset-2 duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="  hover:text-violet-500 hover:underline underline-offset-2 duration-300"
          >
            Register
          </Link>
        </div>
        {/* <div>
          <p>
            Logged in as{" "}
            <span className="text-violet-500 font-semibold">Dip</span>
          </p>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
