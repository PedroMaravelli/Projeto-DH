var express = require('express');
var router = express.Router();
const controllersPagina = require('../controllers/controllersPagina')

router.get('/', controllersPagina.home)
router.get('/cadastro', controllersPagina.cadastro)




module.exports = router;
