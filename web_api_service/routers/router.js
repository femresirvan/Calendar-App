const express = require('express');
const isAuthenticated = require('../middlewares/jwtAuth');
const event = require('../controllers/event');
const user = require('../controllers/user');

const router = express.Router();

/**
 * EVENT ROUTES
 */

router.post('/api/events', isAuthenticated, event.createEvent);
router.get('/api/events', isAuthenticated, event.getEvents);
router.delete('/api/events/:eventId', isAuthenticated, event.deleteEvent);
router.put('/api/events', isAuthenticated, event.updateEvent);

/**
 * USER ROUTES
 */

router.post('/auth/login', user.login);
router.post('/auth/register', user.register);
router.get('/auth/get-user', isAuthenticated, event.temporaryController);
router.get('/auth/logout', isAuthenticated, user.logout);

module.exports = router;
