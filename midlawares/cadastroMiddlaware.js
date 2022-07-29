const {body} = require('express-validator')

const validations = [
    body('nome').notEmpty(),
    body('lastname').notEmpty(),
    body('cpf').notEmpty().isNumeric().isByteLength({min: 11, max:11}),
    body('senha').notEmpty().isLength({min:5, max:20}),
    body('data-nascimento').notEmpty().isDate(),
    body('confirmarsenha').notEmpty().isLength({min:5, max:20})


]
module.exports = validations;