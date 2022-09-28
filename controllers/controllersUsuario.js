const fs = require('fs')
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const { sequelize, Usuario } = require('../database/models')
const cookie = require('cookie-parser')

const controllersUsuario = {
    cadastroPost: async (req, res) => {
        let { nome, sobrenome, email, data_nascimento, sexo, cpf, telefone, senha, confirma_senha, promocoes } = req.body

        const { validationResult } = require('express-validator')
        let erro = validationResult(req)

        if (!erro.isEmpty()) {
            console.log(erro.mapped())
            res.status(403).redirect('/cadastro')
        } else {
            const passwordC = bcrypt.hashSync(senha, 10)
            senha = passwordC

            const passwordConfirmaC = bcrypt.hashSync(confirma_senha, 10)
            confirma_senha = passwordConfirmaC

            const resultado = await Usuario.create({
                nome,
                sobrenome,
                email,
                data_nascimento,
                sexo,
                cpf,
                telefone,
                senha,
                confirma_senha,
                promocoes
            });
           

            usersJson.push(req.body)
            fs.writeFile('users.Json', JSON.stringify(usersJson, null, 10), err => {
                if (err) throw err;
                console.log("Done writing");
            });

            res.render('login', {resultado})

        }
    },
    loginPost: async (req, res) => {

        const dadosUsuario = req.body

        const user = await Usuario.findOne({
            where: { email: dadosUsuario.email },raw:true
        });

        // console.log(user)
        //Busca o usuario por email
        // const user = usersJson.find((u) => u.email == dadosUsuario.email)

        //Valida se o usuario existe
        if (user) {
            //compara a senha do formulario com a senha do json            
            let senhaValida = bcrypt.compareSync(dadosUsuario.senha, user.senha)
            // console.log(senhaValida)
            if (senhaValida) {
                res.cookie('nomeUsuario',user.email)
                req.session.idUser = user.id
                req.session.usuario = user
                res.cookie('perfilUsuario',user.nome)
                console.log(user)
                res.redirect('/')
                return
                //login com sucesso                
            }
        }
        return res.send('Login ou senha errada')

    },
    perfil: (req, res) => {
        res.render('perfilUsuario', {usuario:req.session.usuario})
    }
}

module.exports = controllersUsuario