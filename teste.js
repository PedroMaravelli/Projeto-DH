const {sequelize, CarrinhoProduto} = require('./database/models')

async function testedb(){
    const test = await CarrinhoProduto.findAll()
    console.log(test)
}
testedb()