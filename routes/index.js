var express = require('express');
const controllersHomePage = require('../controllers/controllersPagina');
var router = express.Router();
const controllersPagina = require('../controllers/controllersPagina')

router.get('/', controllersPagina.home)
router.get('/cadastro', controllersPagina.cadastro)
router.get('/produtos', controllersPagina.produtos)
router.get('/login', controllersPagina.login)








module.exports = router;
