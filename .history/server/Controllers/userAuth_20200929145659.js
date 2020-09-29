const User = require("../Models/user");

(module.exports.signupGet = (req, res) => {
  res.json({ message: "Working of get route in signup" });
}),
  (module.exports.signupPost = (req, res) => {
    //res.json({ message: "Working of post route in signup" });
    const handleError = (err) => {
      let errors = {
        email: "",
        password: "",
        mobile: "",
        name: "",
      };
      if (err.code === 11000) {
        errors.email = "The user already exists";
        return err
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
  (module.exports.loginGet = (req, res) => {
    res.json({ message: "Working of get route in login" });
  }),
  (module.exports.loginPost = (req, res) => {
    res.json({ message: "Working of post route in login" });
  });
