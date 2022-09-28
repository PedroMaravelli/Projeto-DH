const {sequelize, Usuario} = require('../database/models')
const bcrypt = require('bcrypt')


const controllersPerfilUsuario = {
    perfilUsuario: (req,res) => {
        
        //Lógica usuário logado
        let logado = req.cookies.perfilUsuario
        if(logado == undefined){
            logado = false            
        } 

        res.render('perfilUsuario',{usuario:req.session.usuario, logado})
    },
    updateSenha: async (req, res) =>{
        let {senha, confirmeSenha} = req.body

        const senhaCriptografada = bcrypt.hashSync(senha, 10)
        senha = senhaCriptografada
        const confirmeSenhaCriptografada = bcrypt.hashSync(confirmeSenha,10)
        confirmeSenha = confirmeSenhaCriptografada

        if(req.session.idUser != undefined){
            const updateSenha = await Usuario.update({
                senha: senha,
                confirma_senha: confirmeSenha
    
            },{
                where:{id: req.session.idUser}
            })
    
            return res.redirect('/')

        }else{
            return res.redirect('/login')
        }




    }

}

module.exports = controllersPerfilUsuario