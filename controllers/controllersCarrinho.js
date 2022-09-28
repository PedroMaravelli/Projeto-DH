const { sequelize, Carrinho } = require('../database/models')
const { CarrinhoProduto } = require('../database/models')
const cookie = require('cookie-parser')
const { raw } = require('express')


const controllersCarrinho = {
    carrinhoPedido: (req, res) => {
        const { nome, imagem, preco, quantidade, tamanho} = req.body

        let carrinhoCookie = req.cookies.carrinho 

        if (carrinhoCookie == undefined){
            carrinhoCookie = []
        }

        carrinhoCookie.push({ nome: nome, imagem: imagem, preco:preco, quantidade: quantidade, tamanho: tamanho })      
        
        res.cookie('carrinho', carrinhoCookie)
        res.redirect('/carrinho')
    },
    carrinho: (req, res) => {
        let carrinho = req.cookies.carrinho

        if (carrinho == undefined){
            carrinho = []
        }        
        
        // console.log(carrinho)
        let totalProdutos = 0
        for (let produto of carrinho){            
            totalProdutos += produto.quantidade*produto.preco
        }

        //Lógica usuário logado
        let logado = req.cookies.perfilUsuario
        if(logado == undefined){
            logado = false            
        } 
        res.render('carrinho', { carrinho: carrinho, totalProdutos:totalProdutos, logado })
    },
    adicionaCarrinho: async (req, res) => {

        const { quantidade, tamanho } = req.body

    },
    esvaziaCarrinho: (req,res) => {
        let esvaziaCarrinho = []
        res.cookie('carrinho', esvaziaCarrinho)
        res.redirect('/carrinho')
    }

}
module.exports = controllersCarrinho