const {body} = require('express-validator')

const validations = [
    body('nome').notEmpty(),
    body('sobrenome').notEmpty(),
    body('cpf').notEmpty().isNumeric().isByteLength({min: 11, max:11}),
    body('senha').notEmpty().isLength({min:5, max:20}),
    body('data_nascimento').notEmpty().isDate(),
    body('confirma_senha').notEmpty().isLength({min:5, max:20})


]
module.exports = validations;