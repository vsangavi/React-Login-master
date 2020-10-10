const mongoose = require("mongoose");
//We are initializing our moongoose Schema
const Schema = mongoose.Schema;
//requireing the bcrypt package for hashing the password
const bcrypt = require("bcrypt");
//requiring isEmail from the validator for checking whether it is email or not
const { isEmail } = require("validator");

//Creating the user Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: [3, "The name should be minimum 3 chars"],
      required: true,
    },
    password: {
      type: String,
      minlength: [7, "The password should be minimum 7 chars"],
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Enter a Email"],
      validate: [isEmail, "Enter the valid email"],
    },
    mobile: {
      type: Number,
      required: [true, "Enter a  phonenumber"],
    },
  },
  {
    timestamps: true,
  }
);
//We are hashing the password and storing it in the database
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
//Assigning the Schema model to a variable and exporting it
const User = mongoose.model("User", userSchema);
module.exports = User;
