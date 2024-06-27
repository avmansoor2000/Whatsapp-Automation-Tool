const express = require('express');
const router = express.Router();
const sendMessage = require('../webDriver/webDriver');

router.post('/', async (req, res) => {
    const { message } = req.body;
    const result = await sendMessage(message);
    res.json(result);
});

module.exports = router;
