const express = require('express');
const router = express.Router();

const {AddAllProdact, GatAllProduct} = require('../controllers/AddProducts');

router.post('/', AddAllProdact);
router.get('/:id', GatAllProduct);

module.exports = router;    