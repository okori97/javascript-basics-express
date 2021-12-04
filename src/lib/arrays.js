const getNthElement = (index, array) => {
  // your code here

  return array[index];
};

const arrayToCSVString = array => {
  // your code here

  const string = array.join();

  return string;
};

const csvStringToArray = string => {
  // your code here

  const array = string.split(',');

  return array;
};

const addToArray = (element, array) => {
  // your code here

  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here

  const newArray = array.concat(element);

  return newArray;
};

const removeNthElement = (index, array) => {
  // your code here

  // const place = array.indexOf(index);

  const removed = array.splice(index, 1);
  return removed;
};

const numbersToStrings = numbers => {
  // your code here

  for (let index = 0; index < numbers.length; index++) {
    numbers[index] = numbers[index].toString();
  }

  return numbers;
};

const uppercaseWordsInArray = strings => {
  // your code here

  for (let index = 0; index < strings.length; index++) {
    strings[index] = strings[index].toUpperCase();
  }

  return strings;
};

const reverseWordsInArray = strings => {
  // your code here

  for (let index = 0; index < strings.length; index++) {
    strings[index] = strings[index]
      .split('')
      .reverse()
      .join('');
  }

  return strings;
};

const onlyEven = numbers => {
  // your code here

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 != 0) {
      numbers.splice(index, 1);
    }
  }

  return numbers;
};

const removeNthElement2 = (index, array) => {
  // your code here

  const newA = [...array];
  newA.splice(index, 1);

  return newA;
};

const elementsStartingWithAVowel = strings => {
  // your code here

  const vowelRegex = /^[aeiou]/i;
  const results = strings.filter(letter => vowelRegex.test(letter));

  return results;
};

const removeSpaces = string => {
  // your code here

  const news = string.split(' ').join('');

  return news;
};

const sumNumbers = numbers => {
  // your code here
  let counter = 0;

  for (let index = 0; index < numbers.length; index++) {
    counter += numbers[index];
  }

  return counter;
};

const sortByLastLetter = strings => {
  // your code here

  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
