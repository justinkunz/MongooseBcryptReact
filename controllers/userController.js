const db = require("../models");
const bcrypt = require("bcrypt");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const newUser = req.body;
    newUser.password = bcrypt.hashSync(req.body.password, 10);

    db.User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  login: function(req, res) {
    db.User.findOne({ email: req.body.email })
      .then(dbUser => {
        const hashedPw = dbUser.password;
        bcrypt.compare(req.body.password, hashedPw, function(err, match) {
          if (err) {
            console.log(err);
          }
          if (match) {
            res.json({
              status: "success 👻",
              name: dbUser.firstName + " " + dbUser.lastName,
              email: dbUser.email
            });
          } else {
            res.json({
              status: "failed",
              msg: "Incorrect Credentials 🚀"
            });
          }
        });
      })
      .catch(err => res.status(422).json(err));
  }
};
