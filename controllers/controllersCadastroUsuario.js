const fs = require('fs')
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const {sequelize, Usuario} = require('../database/models')

const controllersCadastroUsuario = {
    cadastroPost: async (req, res) => {
        let { nome, sobrenome, email, data_nascimento, sexo, cpf, telefone, senha, confirma_senha, promocoes} = req.body

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
           
            res.redirect('/perfil')

        }
    },
}

module.exports = controllersCadastroUsuario