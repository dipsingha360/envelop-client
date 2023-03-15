import React, { useState } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
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
    // console.log(formFields.name, formFields.email, formFields.password);

    if (!error) {
      // clear
      setFormFields({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-20 ">
      <form onSubmit={handleRegister} className="flex flex-col gap-5 w-[25rem]">
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
        {error && <ErrorMessage error={error} />}
      </form>
    </div>
  );
};

export default React.memo(Register);
