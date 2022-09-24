
let produtosMasculinos = [{ nome: 'Camiseta Lisa Branca', valor: 49.99 }, { nome: 'Camiseta Lisa Cinza', valor: 49.99 }, { nome: 'Camiseta Lisa Azul', valor: 49.99 }]
let produtosFemininos = [{ nome: 'Camiseta Feminina Branca', valor: 39.99 }, { nome: 'Camiseta Feminina Rosa', valor: 39.99 }, { nome: 'Camiseta Feminina Azul', valor: 39.99 }]

const fs = require('fs')
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const cookie = require('cookie-parser')
const {sequelize, Produto} = require('../database/models')
const {Op} = require('sequelize')

const controllersPagina = {

    home: async  (req, res) => {
        const produtos = await Produto.findAll({limit:4})
        const produtosFem = await Produto.findAll({
            where:{genero: 'Feminino'},
            limit: 4
        })
        res.render('homePage', { produtos, produtosFem })
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




}

module.exports = controllersPagina

