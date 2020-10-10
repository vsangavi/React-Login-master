//requirning the user model
const User = require("../Models/user");
//requiring bcrypt here to compare the user entered password with the hassedpassword
const bcrypt = require("bcrypt");
//requiring jwt for creating the token
var jwt = require("jsonwebtoken");
let result;
(exports.signupPost = (req, res) => {
  //We are getting the necessary information from the users
  const handleError = (err) => {
    let errors = {
      email: "",
      password: "",
      mobile: "",
      name: "",
    };
    if (err.code === 11000) {
      errors.email = "The user already exists";
      return errors;
    }
    if (err.message.includes("User validation failed")) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
      return errors;
    }
    console.log(err.message, err.code);
  };
  const newuser = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    mobile: req.body.mobile,
  });
  newuser
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      const errors = handleError(err);
      res.json({ errors: errors });
    });
}),
  (exports.loginPost = async (req, res) => {
    const { email, password } = req.body;

    if (email !== "" && password !== "") {
      try {
        result = await User.findOne({ email });
      } catch (error) {
        res.json({ message: error });
      }
    }
    if (result !== null) {
      let secure_pass = await bcrypt.compare(password, result.password);
      secure_pass
        ? ((token = jwt.sign({ _id: result._id }, "shhhhh")),
          res.cookie("token", token, {
            expires: new Date(Date.now() + 900000),
          }),
          res.json({ token, email }))
        : res.json({ message: "Email and password mismatch" });
    } else {
      res.json({ message: "User is not in the db" });
    }
  });
module.exports.signout = () => {};
