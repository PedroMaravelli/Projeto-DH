module.exports = (sequelize, DataType) => {
    const produto = sequelize.define('Produto',{
        SKU: DataType.STRING,
        nome: DataType.STRING,
        descricao: DataType.STRING,
        preco: DataType.DECIMAL,
        cor: DataType.STRING,
        tamanho: DataType.STRING,
        genero: DataType.STRING,
        quantidade: DataType.INTEGER,
        imagem: DataType.STRING,



    },{
        timestamps: false,
        tableName: 'produtos'
    })

    return produto






}