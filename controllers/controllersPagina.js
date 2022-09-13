
let produtosMasculinos = [{ nome: 'Camiseta Lisa Branca', valor: 49.99 }, { nome: 'Camiseta Lisa Cinza', valor: 49.99 }, { nome: 'Camiseta Lisa Azul', valor: 49.99 }]
let produtosFemininos = [{ nome: 'Camiseta Feminina Branca', valor: 39.99 }, { nome: 'Camiseta Feminina Rosa', valor: 39.99 }, { nome: 'Camiseta Feminina Azul', valor: 39.99 }]

const fs = require('fs')
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const controllersPagina = {

    home: (req, res) => {
        res.render('homePage', { produtos: produtosMasculinos, produtosfem: produtosFemininos })
    },

    produtos: (req,res) => {
        res.render('produtos', {produtos: produtosMasculinos , produtosfem: produtosFemininos})
    },
    faq: (req, res)=>{
        res.render('faq')
    },
    cadastro: (req,res) => {
        res.render('cadastro')
    },
    cadastroProdutos: (req,res) =>{
        res.render('cadastroProdutos')
    },
    cadastroProdutosPost: (req,res) =>{
        const {validationResult} = require('express-validator')

        const produtos = req.body
        let erros = validationResult(req)

            produtosMasculinos.push({nome:produtos.nome, valor:produtos.valor})
            res.redirect('/produtos')
        
    },


    cadastroPost: (req,res)=>{
        let dataUsers = req.body
        const {validationResult} = require('express-validator')


        let erro = validationResult(req)
        if(!erro.isEmpty()){
            console.log(erro.mapped())
            res.status(403).redirect('/cadastro')
        } else {

            const passwordC = bcrypt.hashSync(dataUsers.senha, 10)
            dataUsers.senha = passwordC
            usersJson.push(dataUsers)
            fs.writeFile('users.Json', JSON.stringify(usersJson, null, 10), err => {

                if (err) throw err;
                console.log("Done writing");
            });

            res.redirect('/login')

        }
    },

    cadastro: (req, res) => {
        res.render('cadastro')
    },

    login: (req,res) => {
        res.render('login')
    },
   

    produtos: (req, res) => {
        res.render('produtos', { produtos: produtosMasculinos, produtosfem: produtosFemininos })
    },
    login: (req, res) => {
        res.render('login')
    },
    loginPost: (req, res) => {
        
        const dadosUsuario = req.body
        
        //Busca o usuario por email
        const user = usersJson.find((u) => u.email == dadosUsuario.email)
        
        //Valida se o usuario existe
        if (user) {
            //compara a senha do formulario com a senha do json            
            let senhaValida = bcrypt.compareSync(dadosUsuario.senha, user.senha)
            if (senhaValida) {
                req.session.usuario = user
                res.redirect('/perfil')
                //login com sucesso                
            }
        }
        return res.send('Login ou senha errada')              
        
        
        
    },
    
}

module.exports = controllersPagina

