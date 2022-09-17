var express = require('express');

var router = express.Router();
const validations = require('../midlawares/cadastroMiddlaware')
const controllersUsuario = require('../controllers/controllersUsuario')
const controllersPagina = require('../controllers/controllersPagina')

router.get('/', controllersPagina.cadastro)
router.post('/',validations, controllersUsuario.cadastroPost)
router.get('/login', controllersPagina.login)
router.post('/login',controllersUsuario.loginPost)

module.exports = router