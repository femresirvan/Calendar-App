const express = require('express');
const event = require('../controllers/event');

const router = express.Router();

router.post('/api/users/:userId/events', event.createEvent);
router.get('/api/users/:userId/events/:eventId', event.getEvents);
router.put('/api/users/:userId/events/:eventId', event.deleteEvent);
router.delete('/api/users/:userId/events/:eventId', event.updateEvent);

module.exports = router;

/**
 ** These routes are secured. So i don't have to verify jwt again.
 */
