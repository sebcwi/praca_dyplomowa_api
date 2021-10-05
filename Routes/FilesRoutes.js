const express = require('express')
const router = express.Router()
const FileController = require('../Controllers/FilesController')

router.get('/:name',FileController.getFile)

module.exports = router