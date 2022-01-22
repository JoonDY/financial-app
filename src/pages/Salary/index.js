import Form from '../../components/Form';
import Input from '../../components/Input';
import SalaryInputs from './logic';

const Salary = () => {
  const { salaryProps } = SalaryInputs();

  return (
    <main>
      <Form title="Take It Home">
        {salaryProps.map(
          (
            { label, type, placeholder, handleChange, disabled, value },
            index
          ) => {
            return (
              <Input
                key={index}
                label={label}
                type={type}
                placeholder={placeholder}
                value={value}
                handleChange={handleChange}
                disabled={disabled}
              />
            );
          }
        )}
      </Form>
    </main>
  );
};

export default Salary;
