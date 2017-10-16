var express = require('express');
var router = express.Router();
var _ = require('underscore');

var Cow = require('../lib/cow').Cow;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  var cow = new Cow();
  var greeting = cow.greets('matey.');
  res.send(greeting);
});

module.exports = router;
