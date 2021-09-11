const express = require('express')
const router = express.Router()
const HistoryController = require('../Controllers/HistoryController')

router.get('/',HistoryController.getHistoryAll)
router.post('/',HistoryController.postHistory)
router.get('/:name',HistoryController.getPatch)

module.exports = router