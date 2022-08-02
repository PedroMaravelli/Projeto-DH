const {body} = require('express-validator')

let validationsProducts = [
    body('nomeProduto').notEmpty(),
    body('precoProduto').notEmpty(),
    body('idProduto').notEmpty(),
    body('corProduto').notEmpty(),
    body('estoqueProduto').notEmpty(),
    body('classificacaoProduto').notEmpty(),
    body('imagemProduto').notEmpty(),
    body('descricaoProduto').notEmpty(),

]

module.exports = validationsProducts;