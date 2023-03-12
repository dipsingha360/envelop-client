import React from "react";

const FormControl = ({
  label,
  innerLabel,
  inputType,
  placeholder,
  formFields,
  setFormFields,
}) => {
  return (
    <div className="form-control flex flex-col gap-2">
      <label htmlFor={label} className=" cursor-pointer">
        {innerLabel}
      </label>
      <input
        type={inputType}
        id={label}
        placeholder={placeholder}
        value={formFields[label]}
        onChange={(e) =>
          setFormFields({ ...formFields, [label]: e.target.value })
        }
        className="border px-5 py-3 rounded-lg outline-none focus:border-violet-500 w-[25rem]"
      />
    </div>
  );
};

export default FormControl;
