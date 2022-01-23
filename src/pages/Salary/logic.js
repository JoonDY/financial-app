import { useState, useEffect } from 'react';
import { netPay } from '../../helpers/formulaSalary';
import { roundTwo } from '../../helpers/helpers';

const SalaryInputs = () => {
  const [inputs, setInputs] = useState({
    payHour: '',
    grossAnnual: '',
  });

  const [net, setNet] = useState({
    netYear: null,
    netDay: null,
    netWeek: null,
    netMonth: null,
  });

  useEffect(() => {
    if (inputs.grossAnnual | inputs.payHour) {
      const annual = netPay(inputs.grossAnnual, inputs.deductions);
      setNet({
        netYear: annual,
        netDay: annual / 52 / 5,
        netWeek: annual / 52,
        netMonth: annual / 12,
      });
    }
  }, [inputs]);

  const handlePerHour = (e) => {
    setInputs({
      payHour: roundTwo(e.target.value),
      grossAnnual: roundTwo(e.target.value * 40 * 52),
    });
  };

  const handleAnnual = (e) => {
    setInputs({
      payHour: roundTwo(e.target.value / 40 / 52),
      grossAnnual: roundTwo(e.target.value),
    });
  };

  const salaryProps = [
    {
      label: 'Pay Per Hour',
      placeholder: '$0.00',
      value: inputs.payHour,
      handleChange: handlePerHour,
      type: 'number',
    },
    {
      label: 'Gross Annual',
      placeholder: '$0.00',
      value: inputs.grossAnnual,
      handleChange: handleAnnual,
      type: 'number',
    },
    {
      label: 'Net Annual Pay',
      disabled: true,
      value: `$ ${Math.floor(net.netYear / 10) * 10}`,
      placeholder: '$0.00',
    },

    {
      label: 'Net Monthly Pay',
      disabled: true,
      value: `$ ${Math.floor(net.netMonth)}`,
      placeholder: '$0.00',
    },
    {
      label: 'Net Weekly Pay',
      disabled: true,
      value: `$ ${Math.floor(net.netWeek)}`,
      placeholder: '$0.00',
    },

    {
      label: 'Net Daily Pay',
      disabled: true,
      value: `$ ${Math.floor(net.netDay)}`,
      placeholder: '$0.00',
    },
  ];

  return { salaryProps };
};

export default SalaryInputs;
