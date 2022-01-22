import React from 'react';

const Form = ({ title, children }) => {
  return (
    <section className="flex flex-col mx-auto p-4 sm:p-8 max-w-xl h-full rounded-lg shadow-xl my-10">
      <h2 className="calc-header">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3">{children}</div>
    </section>
  );
};

export default Form;
