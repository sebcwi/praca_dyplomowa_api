const express = require('express')
const router = express.Router()
const EventController = require('../Controllers/EventController')
const auth = require('../middleware/auth')

router.post('/',auth,EventController.postEvent)
router.get('/',EventController.getAllEvents)
router.get('/:id',EventController.getById)

module.exports = router