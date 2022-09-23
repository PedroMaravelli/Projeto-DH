const { sequelize, Produto } = require('../database/models')
const cookie = require('cookie-parser')
const { produtos } = require('./controllersPagina')

const controllersProdutos = {
    renderizaProdutos: async (req,res) => {
        let produtos = await Produto.findAll()
        
        let exibeProdutos = []
        let novosProdutos = []

        for (let i = 0; i < produtos.length; i++){
            if(exibeProdutos.includes(produtos[i].nome) == false){
                
                exibeProdutos.push(produtos[i].nome)
                novosProdutos.push(produtos[i])
            }
        }
        produtos = novosProdutos
        
        res.render('produtos', { produtos })
    }
}

module.exports = controllersProdutos