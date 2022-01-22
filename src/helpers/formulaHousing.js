export const mortgageCalc = (principal, interest, years) => {
  const payments = years * 12;
  const rate = interest / 12;
  const mortgage =
    principal *
    ((rate * (1 + rate) ** payments) / ((1 + rate) ** payments - 1));
  return mortgage;
};
