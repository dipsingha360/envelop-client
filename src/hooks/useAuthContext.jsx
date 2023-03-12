import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const context = useAuthContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext hook must be used inside AuthContextProvider"
    );
  }

  return context;
};
