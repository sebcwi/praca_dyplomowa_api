const express = require('express')
const router = express.Router()
const NewsController = require('../Controllers/NewsController')
const auth = require('../middleware/auth')

router.get('/',NewsController.getNewsByPart)

module.exports = router