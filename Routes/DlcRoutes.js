const express = require('express')
const router = express.Router()
const DlcController = require('../Controllers/DlcController')

router.get('/',DlcController.getAll)

module.exports = router