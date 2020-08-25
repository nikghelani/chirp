var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find(function (err, users) {
      if (err) console.log(err)

      res.render('accounts/list', { accounts: users });
  });
});

module.exports = router;
