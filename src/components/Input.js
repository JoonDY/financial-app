import React from 'react';

const Input = ({ type, children, placeholder, disabled }) => {
  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className="sm:col-span-2 text-xs font-semibold px-4 py-2 flex items-center my-2 sm:mx-16 focus:outline-none border-2 border-gray-200 shadow-sm focus:border-indigo-200"
    >
      {children}
    </input>
  );
};

export default Input;
