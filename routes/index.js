var express = require('express');
var router = express.Router();

const controllersPagina = require('../controllers/controllersPagina')
const controllersCheckout = require('../controllers/controllersCheckout')
const controllersCarrinho = require('../controllers/controllersCarrinho')
const controllersProdutos = require ('../controllers/controllersProdutos')

router.get('/', controllersPagina.home)
router.get('/produtos', controllersProdutos.renderizaProdutos)

router.get('/carrinho', controllersCarrinho.carrinho)
router.post('/carrinho/:id', controllersCarrinho.carrinhoPedido)
router.post('/esvazia-carrinho', controllersCarrinho.esvaziaCarrinho)
router.get('/checkout', controllersCheckout.checkout)
router.get('/login', controllersPagina.login)
router.get('/faq', controllersPagina.faq)






module.exports = router;











