var express = require('express');
var router = express.Router();
const controllersPerfilUsuario = require('../controllers/controllersPerfilUsuario')


router.get('/', controllersPerfilUsuario.perfilUsuario)


module.exports = router
