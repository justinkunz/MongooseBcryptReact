const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  // Create new user controller
  create: function (req, res) {
    const { firstName, lastName, email } = req.body;
    const newUser = { firstName, lastName, email };

    // Hash plaintext password for user
    // DO NOT store plaintext password in db
    newUser.password = bcrypt.hashSync(req.body.password, 10);

    db.User.create(newUser)
      .then((dbUser) => res.json({ status: "success" }))
      .catch((err) => res.status(503).json(err));
  },
  // Login controller
  login: function (req, res) {
    // Find account by email
    db.User.findOne({ email: req.body.email })
      .then((dbUser) => {
        // Using bcrypt, compare stored hashed password with user submitted password
        const hashedPw = dbUser.password;
        bcrypt.compare(req.body.password, hashedPw, function (err, match) {
          if (err) {
            console.log(err);
            res.status(503).send("Server error occurred");
          }
          // If hashed password matches user submitted password (according to bcrypt)
          // Send user data, else, reject request
          if (match) {
            res.json({
              status: "success",
              name: dbUser.firstName + " " + dbUser.lastName,
              email: dbUser.email,
            });
          } else {
            res.status(401).send("Unauthorized");
          }
        });
      })
      .catch((err) => res.status(503).json(err));
  },
};
