const express = require("express");
const event = require("../controllers/event");
const router = express.Router();

router.post("/api/events", event.createEvent);

module.exports = router;

/**
 ** These routes are secured. So i don't have to verify jwt again.
 */
