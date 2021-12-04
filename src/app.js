const express = require('express');

// declare app & json middleware
const app = express();
app.use(express.json());

const logger = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

// import routers
const stringsRouter = require('./routes/strings');
const numbersRouter = require('./routes/numbers');
const arraysRouter = require('./routes/arrays');
const booleanRouter = require('./routes/booleans');

// use routers
app.use('/strings', logger, stringsRouter);
app.use('/numbers', numbersRouter);
app.use('/arrays', arraysRouter);
app.use('/booleans', booleanRouter);

module.exports = app;
