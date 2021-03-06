//requirning the user model
const User = require("../Models/user");
//requiring bcrypt here to compare the user entered password with the hassed password
const bcrypt = require("bcrypt");
//requiring jwt for creating the token
var jwt = require("jsonwebtoken");
//requiring expressJWT
let expressJWT = require("express-jwt");
let result;
//Signup controller
(exports.signupPost = (req, res) => {
  //We are getting the necessary information from the users
  const handleError = (err) => {
    //validating the fields
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
  };
  //Saving the newuser in database
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
  //login controller
  (exports.loginPost = async (req, res) => {
    //checking for the login credentials
    const { email, password } = req.body;

    if (email !== "" && password !== "") {
      try {
        result = await User.findOne({ email });
      } catch (error) {
        res.json({ message: error });
      }
    }
    //comapring the user entered password and the password in db
    if (result !== null) {
      let secure_pass = await bcrypt.compare(password, result.password);
      secure_pass
        ? ((token = jwt.sign({ _id: result._id }, process.env.secret)),
          res.cookie("token", token, {
            expires: new Date(Date.now() + 900000),
          }),
          res.json({ token, email }))
        : res.json({ message: "Email and password mismatch" });
    } else {
      res.json({ message: "User is not in the db" });
    }
  });
//Signout route
exports.signout = (req, res) => {
  //clear cookies
  res.clearCookie("token");
  res.json({
    message: "Signed out Done",
  });
};
//Protected middleware
exports.isLoggedin = expressJWT({
  secret: process.env.secret,
  userProperty: "authentication",
  algorithms: ["HS256"],
});
//custom authenticated middleware
exports.isAuthenticated = (req, res, next) => {
  let authUser =
    req.profile &&
    req.authentication &&
    req.profile._id === req.authentication._id;
  if (!authUser) {
    res.json({ error: "ACCESS DENIED" });
  }
  next();
};
