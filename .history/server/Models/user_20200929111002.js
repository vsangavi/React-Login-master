const mongoose = require("mongoose");
//We are initializing our moongoose Schema
const Schema = mongoose.Schema;
//Creating the user Schema
const { isEmail,isNumber } = require("validator");
const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: [3, "The name should me minimum 3 chars"],
      required: true,
    },
    password: {
      type: String,
      minlength: [7, "The password should me minimum 7 chars"],
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, isEmail, "Enter a valid Email"],
    },
    mobile: {
      type: Number,
      required: [true,isNumber
    },
  },
  {
    timestamps: true,
  }
);
//Assigning the Schema model to a variable and exporting it
const User = mongoose.model("User", userSchema);
module.exports = User;
