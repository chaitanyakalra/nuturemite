const express = require("express");
const userCntrlr = require('../controlls/userController');
const router = express.Router();

router.route("/login").post(userCntrlr.login);
router.route("/register").post(userCntrlr.register);

router.route("/getvendors").get(userCntrlr.getUsers);  // Ensure the correct function name
router.route("/getvendors/:id").get(userCntrlr.getOneUser).delete(userCntrlr.deleteUser);  // Ensure the correct function names

module.exports = router;
