const express = require('express')
const router = express.Router()
const dunegonController = require('../Controllers/DungeonController')

router.get('/page/:id',dunegonController.getDungeons)
router.post('/post',dunegonController.postDungeons)

module.exports = router