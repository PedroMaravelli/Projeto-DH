
let produtosMasculinos = [{ nome: 'Camiseta Lisa Branca', valor: 49.99 }, { nome: 'Camiseta Lisa Cinza', valor: 49.99 }, { nome: 'Camiseta Lisa Azul', valor: 49.99 }]
let produtosFemininos = [{ nome: 'Camiseta Feminina Branca', valor: 39.99 }, { nome: 'Camiseta Feminina Rosa', valor: 39.99 }, { nome: 'Camiseta Feminina Azul', valor: 39.99 }]

const fs = require('fs')
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const cookie = require('cookie-parser')

const controllersPagina = {

    home: (req, res) => {
        //Lógica usuário logado
        let logado = req.cookies.perfilUsuario
        if(logado == undefined){
            logado = false            
        } 

        res.render('homePage', { produtos: produtosMasculinos, produtosfem: produtosFemininos, logado})
    },
    faq: (req, res)=>{
        //Lógica usuário logado
        let logado = req.cookies.perfilUsuario
        if(logado == undefined){
            logado = false            
        } 
        res.render('faq', {logado})
    },
    cadastro: (req,res) => {
        //Lógica usuário logado
        let logado = req.cookies.perfilUsuario
        if(logado == undefined){
            logado = false            
        } 
        res.render('cadastro', {logado})
    },
    cadastroProdutos: (req,res) =>{
        //Lógica usuário logado
        let logado = req.cookies.perfilUsuario
        if(logado == undefined){
            logado = false            
        } 
        res.render('cadastroProdutos', {logado})
    },
    cadastroProdutosPost: (req,res) =>{
       //Lógica usuário logado
       let logado = req.cookies.perfilUsuario
       if(logado == undefined){
           logado = false            
       } 

        const {validationResult} = require('express-validator')

        const produtos = req.body
        let erros = validationResult(req)

            produtosMasculinos.push({nome:produtos.nome, valor:produtos.valor})
            res.redirect('/produtos')
        
    },

    cadastro: (req, res) => {
        //Lógica usuário logado
        let logado = req.cookies.perfilUsuario
        if(logado == undefined){
            logado = false            
        } 
        res.render('cadastro', {logado})
    },

    login: (req,res) => {        
        //Lógica usuário logado
        let logado = req.cookies.perfilUsuario
        if(logado == undefined){
            logado = false            
        } 
        
        res.render('login', {logado})
    },

    produtos: (req, res) => {
        //Lógica usuário logado
        let logado = req.cookies.perfilUsuario
        if(logado == undefined){
            logado = false            
        } 
        res.render('produtos', { produtos: produtosMasculinos, produtosfem: produtosFemininos, logado })
    }

}

module.exports = controllersPagina

