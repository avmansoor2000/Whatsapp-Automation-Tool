const express = require('express');
const router = express.Router();
const {postContact,getContacts} = require('../controllers/contactController')

router.post('/postContact', postContact);

router.get('/getContacts',getContacts );

module.exports = router;
