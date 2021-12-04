const sayHello = string => {
  // your code here
  const x = string;
  const y = `Hello, ${x}!`;
  return y;
};

const uppercase = string => {
  // your code here
  const x = string;
  const upperCase = x.toUpperCase();

  return upperCase;
};

const lowercase = string => {
  // your code here

  const lowerCase = string.toLowerCase();

  return lowerCase;
};

const countCharacters = string => {
  // your code here

  const { length } = string;

  return length;
};

const firstCharacter = string => {
  // your code here

  const firstChar = string.charAt(0);

  return firstChar;
};

const firstCharacters = (string, n) => {
  // your code here

  const subString = string.substring(0, n);
  // const twoChar = string.substring(0, 2);
  if (!n) {
    return 0;
  }

  return subString;
  // return twoChar;
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
