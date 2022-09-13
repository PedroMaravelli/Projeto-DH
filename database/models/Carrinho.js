module.exports = (sequelize, DataType) => {
    const carrinho = sequelize.define('Carrinho',{
        status: DataType.STRING,
        usuarios_id: DataType.INTEGER


    },{
        timestamps: false,
        tableName: 'carrinhos'
    })

    return carrinho






}