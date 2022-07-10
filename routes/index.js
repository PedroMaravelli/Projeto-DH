var express = require('express');
var router = express.Router();
const controllersPagina = require('../controllers/controllersPagina')
const controllersCheckout = require('../controllers/controllersCheckout')

router.get('/', controllersPagina.home)
router.get('/cadastro', controllersPagina.cadastro)
router.get('/checkout', controllersCheckout.checkout)




module.exports = router;
