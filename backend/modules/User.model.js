const mongoose = require("mongoose");

const Shema = mongoose.Schema;

//SECTION     collection and shema for registration
const UserSchema = new mongoose.Schema({

  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
 
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
