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
      if(err.message.incl)
      console.log(err.message, err.code);
      res.json({ error: "could not save the user" });
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
      });
  }),
  (module.exports.loginGet = (req, res) => {
    res.json({ message: "Working of get route in login" });
  }),
  (module.exports.loginPost = (req, res) => {
    res.json({ message: "Working of post route in login" });
  });
