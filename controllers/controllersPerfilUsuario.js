const {sequelize, Usuario} = require('../database/models')
const bcrypt = require('bcrypt')


const controllersPerfilUsuario = {
    perfilUsuario: (req,res) => {
        
        let logado = ''
        //Lógica usuário logado        
        if(req.cookies.nomeUsuario == undefined){
            logado = false            
        } else{
            logado = req.session.nomeUsuario
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