const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// Login
router.route("/login").post(userController.login);
// Matches with "/api/user/:id"
router.route("/:id").get(userController.findById);

module.exports = router;
