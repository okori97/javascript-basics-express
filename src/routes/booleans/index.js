const express = require('express');

// Declare router and import functions
const booleanRouter = express.Router();
const { negate, truthiness, isOdd, startsWith } = require('../../lib/booleans');

// Write routers and controllers

booleanRouter.post('/negate', (req, res) => {
  const bool = req.body.value;

  res.status(200);

  res.json({ result: negate(bool) });
});

booleanRouter.post('/truthiness', (req, res) => {
  const bool = req.body.value;

  res.status(200);

  res.json({ result: truthiness(bool) });
});

booleanRouter.get('/is-odd/:num', (req, res) => {
  if (isNaN(req.params.num)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: isOdd(req.params.num) });
});

booleanRouter.get('/:string/starts-with/:letter', (req, res) => {
  if (req.params.letter.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).json({ result: startsWith(req.params.letter, req.params.string) });
});

module.exports = booleanRouter;
