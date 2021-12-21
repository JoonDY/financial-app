const FICARATE = 0.0765;
const STANDARDDEDUCTION = 12550;

const STATETAXRATE = [
  { max: 8932, tax: 0.01 },
  { max: 21175, tax: 0.02 },
  { max: 33421, tax: 0.04 },
  { max: 46394, tax: 0.06 },
  { max: 58634, tax: 0.08 },
  { max: 299508, tax: 0.093 },
  { max: 359407, tax: 0.103 },
  { max: 599012, tax: 0.113 },
  { max: Infinity, tax: 0.123 },
];

const FEDERALTAXRATE = [
  { max: 9950, tax: 0.1 },
  { max: 40525, tax: 0.12 },
  { max: 86375, tax: 0.22 },
  { max: 164925, tax: 0.24 },
  { max: 209425, tax: 0.32 },
  { max: 523600, tax: 0.35 },
  { max: Infinity, tax: 0.37 },
];

const taxAmt = (income, TAXRATE, deductions = 0) => {
  income = income - deductions;
  let tax = 0;
  let prevMax = 0;
  let bracket;
  if (TAXRATE.toLowerCase() === 'federal') {
    bracket = FEDERALTAXRATE;
  } else {
    bracket = STATETAXRATE;
  }
  for (let i = 0; i < bracket.length; i++) {
    if (income > bracket[i].max) {
      let taxable = bracket[i].max - prevMax;
      tax += taxable * bracket[i].tax;
      prevMax = bracket[i].max;
    } else {
      let taxable = income - prevMax;
      tax += taxable * bracket[i].tax;
      return tax;
    }
  }
};

export const netPay = (income, deductions = 0) => {
  if (deductions < STANDARDDEDUCTION) {
    deductions = STANDARDDEDUCTION;
  }
  let taxable = Math.abs(income - deductions);
  let fedTax = taxAmt(taxable, 'federal', deductions);
  let stateTax = taxAmt(income, 'state');

  const ficaTax = income * FICARATE;

  let net = income - fedTax - stateTax - ficaTax;
  return net;
};

export const roundTwo = (num) => {
  if (num == 0 || num === null) {
    return '';
  }
  return Math.round(num * 100) / 100;
};
