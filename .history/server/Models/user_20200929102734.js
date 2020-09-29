const mongoose = require("mongoose");
//We are initializing our moongoose Schema
const Schema = mongoose.Schema;
//Creating the user Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 3,
      required: true,
    },
    password: {
      type: String,
      minlength: 7,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    mobile: {
      type: Number,
      required:tr
    },
  },
  {
    timestamps: true,
  }
);
//Assigning the Schema model to a variable and exporting it
const User = mongoose.model("User", userSchema);
module.exports = User;
