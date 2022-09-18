const {sequelize, Usuario} = require('../database/models')

const controllersPerfilUsuario = {
    perfilUsuario: (req,res) => {
        

        res.render('perfilUsuario', {usuario: req.session.usuario})
    }

}

module.exports = controllersPerfilUsuario