const {sequelize, Usuario} = require('../database/models')
const bcrypt = require('bcrypt')


const controllersPerfilUsuario = {
    perfilUsuario: (req,res) => {
        

        res.render('perfilUsuario',{usuario:req.session.usuario})
    },
    updateSenha: async (req, res) =>{
        let {senha, confirmeSenha} = req.body

        const senhaCriptografada = bcrypt.hashSync(senha, 10)
        senha = senhaCriptografada
        const confirmeSenhaCriptografada = bcrypt.hashSync(confirmeSenha,10)
        confirmeSenha = confirmeSenhaCriptografada

        const updateSenha = await Usuario.update({
            senha: senha,
            confirma_senha: confirmeSenha

        },{
            where:{id: req.session.idUser}
        })

        return res.redirect('/')


    }

}

module.exports = controllersPerfilUsuario