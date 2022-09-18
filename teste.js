const {sequelize, Usuario} = require('./database/models')

async function testedb(){
    const test = await Usuario.findAll()
    console.log(test)
}
testedb()