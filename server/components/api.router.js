const express = require('express');
const router = express.Router();
const events = require('./events/event.router');

router.use('/events', events);




module.exports = router;
