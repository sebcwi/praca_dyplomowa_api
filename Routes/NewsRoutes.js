const express = require('express')
const router = express.Router()
const NewsController = require('../Controllers/NewsController')

router.get('/',NewsController.getNewsByPart)

module.exports = router