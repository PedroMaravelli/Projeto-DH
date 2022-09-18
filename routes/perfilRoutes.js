var express = require('express');
var router = express.Router();
const controllersPerfilUsuario = require('../controllers/controllersPerfilUsuario')
const auth = require('../midlawares/authMiddlaware')


router.get('/', auth, controllersPerfilUsuario.perfilUsuario)


module.exports = router
