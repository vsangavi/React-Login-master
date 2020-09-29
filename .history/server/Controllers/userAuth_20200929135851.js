const User = require("../Models/user");

(module.exports.signupGet = (req, res) => {
  res.json({ message: "Working of get route in signup" });
}),
  (module.exports.signupPost = (req, res) => {
    //res.json({ message: "Working of post route in signup" });

    const newuser = new User({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      mobile: req.body.mobile,
    });
    newuser.save().then((user) => {
      res.json(user);
    });.catch(err=>res)
  }),
  (module.exports.loginGet = (req, res) => {
    res.json({ message: "Working of get route in login" });
  }),
  (module.exports.loginPost = (req, res) => {
    res.json({ message: "Working of post route in login" });
  });
