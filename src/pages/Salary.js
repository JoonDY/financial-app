import { useState } from 'react';
import Form from '../components/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import { netPay } from '../util/formulas';

const Salary = () => {
  const [inputs, setInputs] = useState({
    payHour: null,
    grossAnnual: null,
    deductions: null,
    netAnnual: null,
  });

  return (
    <main>
      <Form title="Money Home">
        <Label>Pay Per Hour</Label>
        <Input placeholder="$0.00"></Input>

        <Label>Gross Annual</Label>
        <Input placeholder="$0.00"></Input>

        <Label>Pretax Deductions</Label>
        <Input placeholder="$0.00"></Input>

        <Label>Net Annual Pay</Label>
        <Input disabled={true} placeholder="$0.00"></Input>

        <Label>Net Daily Pay</Label>
        <Input disabled={true} placeholder="$0.00"></Input>

        <Label>Net Weekly Pay</Label>
        <Input disabled={true} placeholder="$0.00"></Input>

        <Label>Net Monthly Pay</Label>
        <Input disabled={true} placeholder="$0.00"></Input>
      </Form>
    </main>
  );
};

export default Salary;
