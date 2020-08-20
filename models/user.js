var mongoose = require('mongoose'); // include mongoose package
var Schema = mongoose.Schema; // Sehema is just like table defination in SQL

// Defining table type and column
var userSchema = new Schema({
   username: { type: String, required: true },
   password: { type: String, required: true }
});

var User = mongoose.model('User', userSchema);

module.exports = User;