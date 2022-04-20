const express = require('express');
const passport = require('passport');
const { login, register, getUser, logout } = require('../controllers/auth');

const router = express.Router();

// User authentication
router.post('/auth/login', login);
router.post('/auth/register', register);

// User operations
router.get('/api/users/me', passport.authenticate('jwt', { session: false }), getUser);
module.exports = router;
