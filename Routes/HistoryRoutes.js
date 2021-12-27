const express = require('express')
const router = express.Router()
const HistoryController = require('../Controllers/HistoryController')
const auth = require('../middleware/auth')

router.get('/',HistoryController.getHistoryAll)
router.post('/',auth,HistoryController.postHistory)
router.get('/:name',HistoryController.getPatch)

module.exports = router