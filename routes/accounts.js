var express = require('express');
var accountController = require('../controllers/accounts');
var router = express.Router();

router 
  .route('/register')
  .get(accountController.signupForm) // Get request for SignupForm
  .post(accountController.create) // To post a form from user
  
module.exports = router;