import React, { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useSignup } from "../hooks/useSignup";

const Register = () => {
  // states
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signup, isLoading, error } = useSignup();

  const handleRegister = async (e) => {
    e.preventDefault();
    await signup(formFields.name, formFields.email, formFields.password);
    console.log(formFields.name, formFields.email, formFields.password);

    // clear
    // setFormFields({
    //   name: "",
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <SectionTitle title={"Register account"} />

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
        <Button
          submit="submit"
          innerLabel={isLoading ? "Registering..." : "Register"}
        />
        {error && (
          <p className="bg-rose-50 text-rose-500 rounded-lg border p-5  border-rose-200">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
