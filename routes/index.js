var express = require('express');
const controllersHomePage = require('../controllers/controllersPagina');
var router = express.Router();
const controllersPagina = require('../controllers/controllersPagina')

const controllersCarrinho = require('../controllers/controllersCarrinho')

router.get('/', controllersPagina.home)
router.get('/cadastro', controllersPagina.cadastro)
router.get('/produtos', controllersPagina.produtos)
router.get('/carrinho', controllersCarrinho.carrinho)


module.exports = router;
