import React, { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
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
    console.log(formFields);

    // clear
    setFormFields({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <SectionTitle title={"Register account"} />
        {/* <div className="form-control flex flex-col gap-2">
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
        </div> */}

        <FormControl
          label="name"
          innerLabel="Name"
          inputType="text"
          placeholder="Write your full name"
          formFields={formFields}
          setFormFields={setFormFields}
        />

        <FormControl
          label="email"
          innerLabel="Email address"
          inputType="email"
          placeholder="Write your email"
          formFields={formFields}
          setFormFields={setFormFields}
        />

        <FormControl
          label="password"
          innerLabel="Password"
          inputType="password"
          placeholder="Write your password"
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <Button submit="submit" innerLabel="Register" />
      </form>
    </div>
  );
};

export default Register;
