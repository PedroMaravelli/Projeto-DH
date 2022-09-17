var express = require('express');

var router = express.Router();
const validations = require('../midlawares/cadastroMiddlaware')
const controllersCadastroUsuario = require('../controllers/controllersCadastroUsuario')
const controllersPagina = require('../controllers/controllersPagina')

router.get('/', controllersPagina.cadastro)
router.post('/',validations, controllersCadastroUsuario.cadastroPost)
router.get('/login', controllersPagina.login)
router.post('/login',controllersPagina.loginPost)

module.exports = router