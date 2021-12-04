const express = require('express');

const stringsRouter = express.Router();

const {
  uppercase,
  sayHello,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../../lib/strings');

stringsRouter.get(`/hello/:string`, (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

stringsRouter.get(`/upper/:string`, (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

stringsRouter.get(`/lower/:string`, (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

stringsRouter.get(`/first-characters/:string`, (req, res) => {
  res.status(200);
  return req.query.length > 0
    ? res.json({ result: firstCharacters(req.params.string, req.query.length) })
    : res.json({ result: firstCharacter(req.params.string) });
});

module.exports = stringsRouter;
