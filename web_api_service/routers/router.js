const express = require("express");
const isAuthenticated = require("../middlewares/jwtAuth");
const event = require("../controllers/event");
const router = express.Router();

router.post("/api/events", isAuthenticated, event.createEvent);
router.get("/api/temporary", isAuthenticated, event.temporaryController);

module.exports = router;
