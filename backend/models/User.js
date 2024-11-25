const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true ,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'], 
  },
  password: { 
    type: String, 
    required: true ,
    //minlength: [5, 'Password must be at least 5 characters long'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;