const express = require("express");
const { login, signup } = require("../controllers/authController")

const router = express.Router();

router.post("/api/auth/login", login);
router.post("/api/auth/signup", signup);

module.exports = router;
