export const handleInputChange = (e, state, setState) => {
  const { name, value } = e.target;

  setState({
    ...state,
    [name]: value,
  });
};
