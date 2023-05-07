const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getUserProfile } = require('../controllers/userController')

// Get user profile
router.get('/api/user/me', authMiddleware, getUserProfile);

module.exports = router;
