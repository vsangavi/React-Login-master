const mongoose = require("mongoose");
//We are initializing our moongoose Schema
const Schema = mongoose.Schema;
//Creating the user Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 3,
      required:tr
    },
    password: {
      type: String,
      minlength: 7,
    },
    email: {
      type: String,
      unique: true,
    },
    mobile: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
//Assigning the Schema model to a variable and exporting it
const User = mongoose.model("User", userSchema);
module.exports = User;
