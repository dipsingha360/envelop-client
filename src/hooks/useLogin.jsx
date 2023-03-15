import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    // response
    const res = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    // console.log(data);

    if (!res.ok) {
      setIsLoading(false);
      setError(data);
    }

    if (res.ok) {
      setIsLoading(false);

      // update auth context
      dispatch({ type: "LOGIN", payload: data });

      // set/update local storage
      localStorage.setItem("user", JSON.stringify(data));
    }
  };

  return {
    login,
    isLoading,
    error,
  };
};
