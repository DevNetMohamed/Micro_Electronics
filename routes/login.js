const express = require('express');
const router = express.Router();
const { UserLogin } = require('../controllers/UserLogin');

router.post('/', UserLogin)

module.exports = router;