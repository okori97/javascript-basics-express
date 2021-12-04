const express = require('express');

// Declare router and import functions
const arraysRouter = express.Router();

const {
  getNthElement,
  addToArray2,
  arrayToCSVString,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../../lib/arrays');

// Write routers and controllers

arraysRouter.post('/element-at-index/:index', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: getNthElement(req.params.index, array) });
});

arraysRouter.post('/append', (req, res) => {
  const { array } = req.body;
  const { value } = req.body;

  res.status(200).json({ result: addToArray2(value, array) });
});

arraysRouter.post('/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

arraysRouter.post('/starts-with-vowel', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: elementsStartingWithAVowel(array) });
});

arraysRouter.post('/remove-element', (req, res) => {
  const { array } = req.body;
  const first = 0;
  const query = req.query.index;

  return query
    ? res.status(200).json({ result: removeNthElement2(query, array) })
    : res.status(200).json({ result: removeNthElement2(first, array) });
});

module.exports = arraysRouter;
