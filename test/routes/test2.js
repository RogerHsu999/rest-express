'use strict';

let router = require('express').Router();

router.get('/test', (req, res) => {
  abc;
  res.json('abc');
});

module.exports = {
  priority: 10,
  router: router,
  prefix: '/test2/abc'
};