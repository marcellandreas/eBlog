// Input.js
import React from "react";

export const CustomForm = ({ label, type, name, id, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};
