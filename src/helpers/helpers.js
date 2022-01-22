export const handleInputChange = (e, state, setState) => {
  const { name, value } = e.target;

  setState({
    ...state,
    [name]: value,
  });
};

export const numOr0 = (num) => {
  if (isNaN(num) || num === null || num === '') {
    return 0;
  }
  return parseFloat(num);
};

export const roundTwo = (num) => {
  // eslint-disable-next-line
  if (num == 0 || num === null) {
    return '';
  }
  return Math.round(num * 100) / 100;
};

export const sum = (...args) => {
  return args.reduce((a, b) => {
    return numOr0(a) + numOr0(b);
  });
};
