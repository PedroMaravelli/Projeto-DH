var express = require('express');

var router = express.Router();
const validations = require('../midlawares/cadastroMiddlaware')

const controllersPagina = require('../controllers/controllersPagina')

router.get('/', controllersPagina.cadastro)
router.post('/',validations, controllersPagina.cadastroPost )
router.get('/login', controllersPagina.login)
router.post('/login',validations, controllersPagina.loginPost)

module.exports = router