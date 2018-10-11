const express = require('express')
const router = express.Router()
const playlistController = require('../controllers/playlistController')

// @TEST API
router.get('/test', playlistController.test)

module.exports = router
