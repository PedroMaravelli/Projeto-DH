var express = require('express');
var router = express.Router();

const controllersPagina = require('../controllers/controllersPagina')
const controllersCheckout = require('../controllers/controllersCheckout')
const controllersCarrinho = require('../controllers/controllersCarrinho')
const controllersProdutos = require ('../controllers/controllersProdutos')
const authCheckout = require('../midlawares/authCheckout')

router.get('/', controllersPagina.home)
router.get('/produtos', controllersProdutos.renderizaProdutos)

router.get('/carrinho', controllersCarrinho.carrinho)
router.post('/carrinho/:id', controllersCarrinho.carrinhoPedido)
router.post('/esvazia-carrinho', controllersCarrinho.esvaziaCarrinho)
router.get('/checkout',authCheckout, controllersCheckout.checkout)
router.post('/pagamento', controllersCheckout.finalizaCarrinho)
router.get('/login', controllersPagina.login)
router.get('/faq', controllersPagina.faq)
router.get('/sucesso', controllersPagina.sucesso)






module.exports = router;











