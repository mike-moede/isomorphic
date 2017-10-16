var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var retval = {
    username: 'example'
  };
  res.send(retval);
});

module.exports = router;
