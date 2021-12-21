import { useState, useEffect } from 'react';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import { netPay, roundTwo } from '../util/formulaSalary';

const Salary = () => {
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

  return (
    <main>
      <Form title="Take It Home">
        <Input
          label="Pay Per Hour"
          type="number"
          placeholder="$0.00"
          value={roundTwo(inputs.payHour)}
          handleChange={(e) => {
            setInputs({
              payHour: e.target.value,
              grossAnnual: e.target.value * 40 * 52,
            });
          }}
          name="payHour"
        />

        <Input
          label="Gross Annual"
          placeholder="$0.00"
          value={roundTwo(inputs.grossAnnual)}
          handleChange={(e) => {
            setInputs({
              payHour: e.target.value / 40 / 52,
              grossAnnual: e.target.value,
            });
          }}
          name="grossAnnual"
        />

        <Input
          label="Net Annual Pay"
          disabled={true}
          value={`$ ${Math.floor(net.netYear / 10) * 10}`}
          placeholder="$0.00"
        />

        <Input
          label="Net Monthly Pay"
          disabled={true}
          value={`$ ${Math.floor(net.netMonth)}`}
          placeholder="$0.00"
        />

        <Input
          label="Net Weekly Pay"
          disabled={true}
          value={`$ ${Math.floor(net.netWeek)}`}
          placeholder="$0.00"
        />

        <Input
          label="Net Daily Pay"
          disabled={true}
          value={`$ ${Math.floor(net.netDay)}`}
          placeholder="$0.00"
        />
      </Form>
    </main>
  );
};

export default Salary;
