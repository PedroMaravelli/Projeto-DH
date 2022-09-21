const {sequelize, Produto} = require('../database/models')

const controllerProduto = {
    produto: async (req,res) => {
        const {id} = req.params

        const produto = await Produto.findByPk(id)
        res.render('produto', { produto })
    }

    
}

module.exports = controllerProduto