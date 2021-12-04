const add = (a, b) => {
  // your code here

  const sum = a + b;

  return sum;
};

const subtract = (a, b) => {
  // your code here

  const sum = a - b;

  return sum;
};

const multiply = (a, b) => {
  // your code here

  const sum = a * b;

  return sum;
};

const divide = (a, b) => {
  // your code here

  const sum = a / b;

  return sum;
};

const power = (a, b) => {
  // your code here

  return a ** b;
};

const round = a => {
  // your code here

  return Math.round(a);
};

const roundUp = a => {
  // your code here

  return Math.ceil(a);
};

const roundDown = a => {
  // your code here

  return Math.floor(a);
};

const absolute = a => {
  // your code here

  return Math.abs(a);
};

const quotient = (a, b) => {
  // your code here

  const quote = ~~(a / b);

  return quote;
};

const remainder = (a, b) => {
  // your code here

  if (b === 0) {
    return 'Unable to divide by 0.';
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return 'Parameters must be valid numbers.';
  }

  return a % b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
};
