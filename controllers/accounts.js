// For Register page setup
var express = require('express');

exports.signupForm = function(req, res) {
    res.render('accounts/new');
};

// Form request from User
exports.create = function(req, res){
    console.log(req.body)

    res.redirect('/')
};