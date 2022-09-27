module.exports = (sequelize, DataType) => {
    const carrinhoProduto = sequelize.define('CarrinhoProduto',{
        carrinhos_id: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        produtos_id: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        quantidade: DataType.INTEGER


    },{
        timestamps: false,
        tableName: 'carrinhos_has_produtos'
    })

    return carrinhoProduto






}