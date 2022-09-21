const { sequelize, Produto } = require('../database/models')
const exibeBotao = document.getElementById('exibir-botao-produto')

window.addEventListener('load', (event) => {

    const exibeProduto =  async (req,res) => {
        const produtoRenderizado = await Produto.findByPk(produto.id)
        if(produtoRenderizado.dataValues.quantidade == 0){
            exibeBotao.innerHTML = '<p>indisponível</p>'
        }        
    }

    exibeProduto()
}) 