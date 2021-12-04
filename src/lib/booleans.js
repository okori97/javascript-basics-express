const negate = a => {
  // your code here

  return !a;
};

const both = (a, b) => {
  // your code here

  if (a === true && b === true) {
    return true;
  }
  return false;
};

const either = (a, b) => {
  // your code here

  if (a === true || b === true) {
    return true;
  }
  return false;
};

const none = (a, b) => {
  // your code here

  if (a === true || b === true) {
    return false;
  }
  return true;
};

const one = (a, b) => {
  // your code here

  if (a === !b) {
    return true;
  }
  return false;
};

const truthiness = a => {
  // your code here

  boolean = Boolean(a);

  return boolean;
};

const isEqual = (a, b) => {
  // your code here

  if (a === b) {
    return true;
  }
  return false;
};

const isGreaterThan = (a, b) => {
  // your code here
  if (a > b) {
    return true;
  }
  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here

  if (a <= b) {
    return true;
  }
  return false;
};

const isOdd = a => {
  // your code here

  const modulo = a % 2;

  if (modulo == 1) {
    return true;
  }
  return false;
};

const isEven = a => {
  // your code here

  const modulo = a % 2;

  if (modulo == 0) {
    return true;
  }
  return false;
};

const isSquare = a => {
  // your code here
  const isSquare = Math.sqrt(a) % 1;

  return isSquare === 0;
};

const startsWith = (char, string) => {
  // your code here

  if (string[0] == char) {
    return true;
  }
  return false;
};

const containsVowels = string => {
  // your code here

  const vowelRegex = /[aeiou]/i;
  return vowelRegex.test(string);
};

const isLowerCase = string => {
  // your code here

  if (string == string.toLowerCase()) {
    return true;
  }
  if (string != string.toLowerCase()) {
    return false;
  }
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
