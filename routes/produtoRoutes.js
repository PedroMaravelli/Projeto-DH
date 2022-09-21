var express = require('express');
var router = express.Router();
const controllerProduto = require('../controllers/controllersProduto')

router.get('/:id', controllerProduto.produto)

module.exports = router