import { useState, useEffect } from 'react';
import { handleInputChange } from '../../helpers/helpers';
import { calcFire } from '../../helpers/formulaFire';
import { numOr0, sum } from '../../helpers/helpers';
import useLocalStorage from '../../hooks/useLocalStorage';

const FireLogic = () => {
  const [inputs, setInputs] = useLocalStorage('fireInputs', {
    age: '',
    save: '',
    currentExpense: '',
    retiredExpense: '',
    worth: '',
    rate: '',
    wr: '',
  });

  const [outputs, setOutputs] = useState({
    goal: '',
    years: '',
    retireAge: '',
    income: '',
  });

  const handleChange = (e) => {
    handleInputChange(e, inputs, setInputs);
  };

  useEffect(() => {
    let goal;
    if (inputs.wr) {
      const wr = numOr0(inputs.wr);
      if (wr !== 0) {
        goal = (inputs.retiredExpense * 12) / wr;
      } else {
        goal = 0;
      }
    }

    const years = calcFire(inputs.rate, inputs.worth, goal, inputs.save);

    setOutputs({
      ...outputs,
      goal: goal,
      income: sum(inputs.currentExpense, inputs.save),
      retireAge: sum(inputs.age, years),
      years: years,
    });
    return;
  }, [inputs]);

  const fireInputs = [
    {
      label: 'Current Net Worth',
      value: inputs.worth,
      handleChange: handleChange,
      name: 'worth',
      type: 'number',
    },
    {
      label: 'Age',
      value: inputs.age,
      handleChange: handleChange,
      name: 'age',
      type: 'number',
    },
    {
      label: 'Monthly Saving',
      value: inputs.save,
      handleChange: handleChange,
      name: 'save',
      type: 'number',
    },
    {
      label: 'Current Expenses',
      value: inputs.currentExpense,
      handleChange: handleChange,
      name: 'currentExpense',
      type: 'number',
    },
    {
      label: 'Retired Expenses',
      value: inputs.retiredExpense,
      handleChange: handleChange,
      name: 'retiredExpense',
      type: 'number',
    },

    {
      label: 'Expected Rate of Return',
      value: inputs.rate,
      handleChange: handleChange,
      name: 'rate',
      type: 'number',
    },
    {
      label: 'Withdrawal Rate',
      value: inputs.wr,
      handleChange: handleChange,
      name: 'wr',
      type: 'number',
    },
    {
      label: 'Goal',
      value: outputs.goal,
      disabled: true,
    },
    {
      label: 'Years To Retire',
      value: outputs.years,
      disabled: true,
    },
    {
      label: 'Age Retired',
      value: outputs.retireAge,
      disabled: true,
    },
    {
      label: 'Income',
      value: outputs.income,
      disabled: true,
    },
  ];

  return { fireInputs };
};

export default FireLogic;
