const {sequelize, Carrinho} = require('../database/models')
const {CarrinhoProduto} = require('../database/models')

const controllersCarrinho = {
    carrinho: (req,res) => {
    res.render('carrinho')
    },
    adicionaCarrinho: async (req,res) => {

        const {quantidade, tamanho} = req.body

        const carrinho = await Carrinho.findOne({
            where: { usuarios_id: req.session.idUser },
        });
        
        // if (carrinho.status == "Aberto"){

        //     await Carrinho.update({
        //         where: { usuarios_id: req.session.idUser },
        //     });
        // }
    }
}
module.exports = controllersCarrinho