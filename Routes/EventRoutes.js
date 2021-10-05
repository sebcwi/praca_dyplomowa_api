const express = require('express')
const router = express.Router()
const EventController = require('../Controllers/EventController')

router.post('/',EventController.postEvent)
router.get('/',EventController.getAllEvents)

module.exports = router