
let produtosMasculinos = [{nome: 'Camiseta Lisa Branca', valor: 49.99 }, {nome: 'Camiseta Lisa Cinza', valor: 49.99} , {nome: 'Camiseta Lisa Azul', valor: 49.99}]
let produtosFemininos = [{nome: 'Camiseta Feminina Branca', valor: 39.99 }, {nome: 'Camiseta Feminina Rosa', valor: 39.99} , {nome: 'Camiseta Feminina Azul', valor: 39.99}]

const fs = require('fs')
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')


const controllersPagina = {

    home: (req,res) =>{
    res.render('homePage', {produtos: produtosMasculinos , produtosfem: produtosFemininos})
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
            res.status(403).redirect('/cadastro')
        }else{

            const passwordC = bcrypt.hashSync(dataUsers.senha, 10)
            dataUsers.senha = passwordC
            usersJson.push(dataUsers)
            fs.writeFile('users.Json', JSON.stringify(usersJson,null, 10), err => {
                
                if (err) throw err;
                console.log("Done writing"); 
            });
            
            res.redirect('/login')

        }

        


    },






    login: (req,res) => {
        res.render('login')
    },
    loginPost: (req,res)=>{
        const dataLogin = req.body

        let erro = validationResult(req)

        if(!erro.isEmpty()){
            console.log(erro.mapped())
            res.status(403).redirect('/cadastro')
            
        }else{

            const user = usersJson.find((users) => users.email === dataLogin.email)
            if(user){
                let compararSenha = bcrypt.compareSync(dataLogin.senha , user.senha)
                if(compararSenha){
                    req.session.isAuth = dataLogin.email

                    res.redirect('/')
                }

            }else{
                return res.redirect('/login')
            }
        }
        }
}



module.exports = controllersPagina

