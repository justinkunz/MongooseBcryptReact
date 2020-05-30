const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/").post(userController.create);

// Login
router.route("/login").post(userController.login);

module.exports = router;
