import React from 'react';

const Label = ({ children }) => {
  return (
    <label className="sm:col-span-1 text-xs flex items-center my-2 font-semibold">
      {children}
    </label>
  );
};

export default Label;
