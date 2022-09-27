const {sequelize, Produto} = require('../database/models')
const cookie = require('cookie-parser')

const controllerProduto = {
    produto: async (req,res) => {
        const {sku} = req.params
        let exibeProdutos = []
        let produto = await Produto.findAll({
            where:{SKU: sku},raw: true
        })
        res.cookie('produtoVisualizado', produto[0], {maxAge: 500000})

        
        res.render('produto', { produto })
    }

    
}

module.exports = controllerProduto