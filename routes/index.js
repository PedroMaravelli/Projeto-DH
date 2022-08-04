var express = require('express');
var router = express.Router();

const controllersPagina = require('../controllers/controllersPagina')
const controllersCheckout = require('../controllers/controllersCheckout')
const controllersCarrinho = require('../controllers/controllersCarrinho')

router.get('/', controllersPagina.home)
router.get('/produtos', controllersPagina.produtos)
router.get('/carrinho', controllersCarrinho.carrinho)
router.get('/checkout', controllersCheckout.checkout)
router.get('/login', controllersPagina.login)

module.exports = router;











