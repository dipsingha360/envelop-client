import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
const Register = () => {
  // states
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register flex flex-col justify-center items-center">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <SectionTitle title={"Register account"} />
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="name" className=" cursor-pointer">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={formFields.name}
            onChange={(e) =>
              setFormFields({ ...formFields, name: e.target.value })
            }
            className="border px-5 py-3 rounded-lg outline-none focus:border-violet-500 w-[25rem]"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
