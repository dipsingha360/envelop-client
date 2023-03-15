import React, { useState } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  // states
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading, error } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(formFields);

    await login(formFields.email, formFields.password);

    if (!error) {
      // clear
      setFormFields({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="login flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleLogin} className="flex flex-col gap-5 w-[25rem]">
        <SectionTitle title={"Login"} />

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
          innerLabel={isLoading ? "Logging..." : "Login"}
        />
        {error && <ErrorMessage error={error} />}
      </form>
    </div>
  );
};

export default React.memo(Login);
