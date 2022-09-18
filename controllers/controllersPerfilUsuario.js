const {sequelize, Usuario} = require('../database/models')

const controllersPerfilUsuario = {
    perfilUsuario: (req,res) => {
        

        res.render('perfilUsuario',{usuario:req.session.usuario})
    },
    updateSenha: async (req, res) =>{
        const {senha, confirmeSenha} = req.body
        const updateSenha = await Usuario.update({
            senha: senha,
            confirma_senha: confirmeSenha

        },{
            where:{id: req.session.idUser}
        })


    }

}

module.exports = controllersPerfilUsuario