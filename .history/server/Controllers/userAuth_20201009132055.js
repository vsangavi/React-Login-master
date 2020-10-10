const { default: validator } = require("validator");
const User = require("../Models/user");
const bcrypt = require("bcrypt");
let result;
(module.exports.signupPost = (req, res) => {
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
  (module.exports.loginPost = async (req, res) => {
    const { email, password } = req.body;
    // if (!validator.isEmail(email)) {
    //   res.json({ message: "Not a valid email" });
    // }

    // try {
    //   let result = await User.findOne({ email });
    //   res.json({ message: result });
    // } catch (error) {
    //   res.json({ message: error });
    // }

    // bcrypt.compare(password, hash).then(function (err, result) {
    //   if (err) {
    //     res.json({ message: err });
    //   } else {
    //     res.json({ message: result });
    //   }
    // });

    // if ({ email } !== "") {
    //   console.log(email);
    try {
      result = await User.findOne({ email });
      console.log(result)
    } catch (error) {
      console.log(error)
    }
    //}
    console.log(result.password);

    if (password !== "") {
      return bcrypt
        .compare(password, result.password)
        .then(function (err, result) {
          if (err) {
            res.json({ message: err });
          } else {
            res.json({ message: "Pasword match" });
          }
        });
    }
  });
