var express = require('express');

var router = express.Router();
const controllersPagina = require('../controllers/controllersPagina')
const validationsProducts = require('../midlawares/cadastroProdutosMiddlaware')
const multerStorage = require('../midlawares/multerCadastroProdutos')
const multer = require('multer');
const multerDiskStorage = require('../midlawares/multerCadastroProdutos');
const validations = require('../midlawares/cadastroMiddlaware')

const upload = multer({storage:multerDiskStorage})

router.get('/cadastro', controllersPagina.cadastroProdutos)
router.post('/cadastro',upload.single('imagemProduto'), controllersPagina.cadastroProdutosPost)


module.exports = router
