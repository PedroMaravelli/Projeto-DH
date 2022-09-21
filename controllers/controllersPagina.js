
let produtosMasculinos = [{ nome: 'Camiseta Lisa Branca', valor: 49.99 }, { nome: 'Camiseta Lisa Cinza', valor: 49.99 }, { nome: 'Camiseta Lisa Azul', valor: 49.99 }]
let produtosFemininos = [{ nome: 'Camiseta Feminina Branca', valor: 39.99 }, { nome: 'Camiseta Feminina Rosa', valor: 39.99 }, { nome: 'Camiseta Feminina Azul', valor: 39.99 }]

const fs = require('fs')
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const cookie = require('cookie-parser')

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

    cadastro: (req, res) => {
        res.render('cadastro')
    },

    login: (req,res) => {
        res.render('login')
    },
   

    produtos: (req, res) => {
        res.render('produtos', { produtos: produtosMasculinos, produtosfem: produtosFemininos })
    }

}

module.exports = controllersPagina

