const express = require('express')
const router = express.Router()
const ServerHealthController = require('../Controllers/ServerHealthController')

router.get('/ping',ServerHealthController.Ping)
module.exports = router