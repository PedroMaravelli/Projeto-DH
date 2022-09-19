var express = require('express');
var router = express.Router();
const controllersPerfilUsuario = require('../controllers/controllersPerfilUsuario')
const auth = require('../midlawares/authMiddlaware')
const loginMiddlaware = require('../midlawares/perfilMiddlaware')


router.get('/', auth, controllersPerfilUsuario.perfilUsuario)
router.post('/',loginMiddlaware,  controllersPerfilUsuario.updateSenha)


module.exports = router
