import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import FireLogic from './logic';

const Fire = () => {
  const { fireInputs } = FireLogic();

  return (
    <main>
      <Form title="FIRE">
        {fireInputs.map(
          (
            { label, value, handleChange, name, disabled, placeholder, type },
            index
          ) => {
            return (
              <Input
                key={index}
                label={label}
                value={value}
                handleChange={handleChange}
                name={name}
                disabled={disabled}
                placeholder={placeholder}
                type={type}
              />
            );
          }
        )}
      </Form>
    </main>
  );
};

export default Fire;
