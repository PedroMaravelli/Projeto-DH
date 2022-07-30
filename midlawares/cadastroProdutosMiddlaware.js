const {body} = require('express-validator')

let validationsProducts = [
    body('nomeProduto').notEmpty(),
    body('precoProduto').notEmpty(),
    body('idProduto').notEmpty(),

]

module.exports = validationsProducts;