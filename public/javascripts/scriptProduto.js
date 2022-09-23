const form = document.getElementById('form-produto')
const quantidade = document.getElementById('quantidade-produto')
const tamanho = document.getElementById('tamanho')
const {sequelize, Produto} = require('../../database/models')




form.addEventListener('submit', (event)=>{
   

    // if(quantidade.value > Produto.quantidade){
    //     event.preventDefault()
    // }

})