const express = require('express');
const router = express.Router();
const {UserRegister} = require('../controllers/User');

router.post('/', UserRegister)

module.exports = router;