const User = require("../Models/user");

(module.exports.signupGet = (req, res) => {
  res.json({ message: "Working of get route in signup" });
}),
  (module.exports.signupPost = (req, res) => {
    //res.json({ message: "Working of post route in signup" });

    const newuser = new User({
      email: req.body.email,
      name: req.body.name,
      mobile: req.body.mobile,
      password: req.body.password,
    });
    newuser
      .save()
      .then((user) => {
        req.json(user);
      })
      .catch((err) => {
        res.json({ error: err });
      });
  }),
  (module.exports.loginGet = (req, res) => {
    res.json({ message: "Working of get route in login" });
  }),
  (module.exports.loginPost = (req, res) => {
    res.json({ message: "Working of post route in login" });
  });
