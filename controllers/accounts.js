// For Register page setup
var express = require('express');
var User = require('../models/user'); // included user.js file or function to this page

//exporting form from this page
exports.signupForm = function(req, res) {
    res.render('accounts/new');
}; 

// Form request from User
exports.create = function(req, res) {
    var username = req.body.email;
    var password = req.body.password;

    //Created new instance of User Function
    var newUser = new User({
        username: username,
        password: password
    });

    //Call backfunction of newUser instance
    newUser.save(function(err) {
    if (err) throw err; // if error occur throw/show err.

    console.log('User saved successfully!'); //shows in console user is saved.
    });
    
    res.redirect('/')
};






