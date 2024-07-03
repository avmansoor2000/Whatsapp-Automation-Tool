const express = require('express');
const router = express.Router();
const {sendMessage} = require('../controllers/messageController')


router.get('/sendMessage',sendMessage)

module.exports = router;
