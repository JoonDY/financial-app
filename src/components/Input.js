import Label from './Label';

const Input = ({
  label,
  type,
  placeholder,
  disabled,
  handleChange,
  value,
  name,
}) => {
  return (
    <>
      <Label>{label}</Label>
      <input
        type={type}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        className="sm:col-span-2 text-xs font-semibold px-4 py-2 flex items-center my-2 sm:mx-16 focus:outline-none border-2 border-gray-200 shadow-sm focus:border-indigo-200"
      />
    </>
  );
};

export default Input;
