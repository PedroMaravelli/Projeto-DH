var express = require('express');

var router = express.Router();
const controllersPagina = require('../controllers/controllersPagina')
const validationsProducts = require('../midlawares/cadastroProdutosMiddlaware')

router.get('/cadastro', controllersPagina.cadastroProdutos)
router.post('/cadastro',validationsProducts, controllersPagina.cadastroProdutosPost)


module.exports = router
