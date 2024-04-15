const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/auth");

router.post("/login", login);
router.post("/register", register);

// router.post("/logout", (req, res) => {
//   // Handle logout logic here
// });

module.exports = router;
