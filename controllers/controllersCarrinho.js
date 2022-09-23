const {sequelize, Carrinho} = require('../database/models')
const {CarrinhoProduto} = require('../database/models')
const cookie = require('cookie-parser')
let carrinhoCookie = []

const controllersCarrinho = {
    carrinho: (req,res) => {





    res.render('carrinho',{carrinho: req.cookies.carrinho})
    },
     carrinhoPedido: (req,res)=>{
        const {id} = req.params
        const {quantidade, tamanho} = req.body
        
       
        carrinhoCookie.push({quantidades:quantidade,tamanhos:tamanho, id})
        console.log(carrinhoCookie);
        res.cookie('carrinho', carrinhoCookie,{maxAge: 100000})
        res.redirect('/carrinho')
    },
    adicionaCarrinho: async (req,res) => {

        const {quantidade, tamanho} = req.body

        
        
    }
    
}
module.exports = controllersCarrinho