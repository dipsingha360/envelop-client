import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <p className="bg-rose-50 text-rose-500 rounded-lg border p-5  border-rose-200">
      {error}
    </p>
  );
};

export default ErrorMessage;
