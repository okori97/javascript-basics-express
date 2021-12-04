const express = require('express');

// Declare router
const numbersRouter = express.Router();
// Call in functions
const { add, subtract, multiply, divide, remainder } = require('../../lib/numbers');

// Routers & controllers

numbersRouter.get(`/add/:num1/and/:num2`, (req, res) => {
  // convert string to num
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);

  return Number.isNaN(num1) || Number.isNaN(num2)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.json({ result: add(num1, num2) });
});

numbersRouter.get('/subtract/:num1/from/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);

  return Number.isNaN(num1) || Number.isNaN(num2)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.json({ result: subtract(num2, num1) });
});

numbersRouter.post('/multiply', (req, res) => {
  const num1 = parseInt(req.body.a, 10);
  const num2 = parseInt(req.body.b, 10);

  // eslint-disable-next-line no-nested-ternary
  if (num1 && num2) {
    return res.status(200).json({ result: multiply(num1, num2) });
  }
  if (num1 === NaN) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  if (num1 && !num2 && !num1 && num2) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
});

numbersRouter.post('/divide/', (req, res) => {
  const num1 = parseInt(req.body.a, 10);
  const num2 = parseInt(req.body.b, 10);

  if (num1 && num2) {
    return res.status(200).json({ result: divide(num1, num2) });
  }
  if (num1 === NaN) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  if (num2 === 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
});

numbersRouter.post('/remainder/', (req, res) => {
  const num1 = parseInt(req.body.a, 10);
  const num2 = parseInt(req.body.b, 10);

  if (num1 && num2) {
    return res.status(200).json({ result: remainder(num1, num2) });
  }
  if (num1 === NaN) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  if (num2 === 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  if (num1 === 0) {
    return res.json({ result: 0 }).status(200);
  }
  if (num1 && !num2 && !num1 && num2) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }
});

module.exports = numbersRouter;
