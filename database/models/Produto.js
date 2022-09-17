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

    produto.associate = (models)=>{
        produto.belongsToMany(models.Carrinho,{
            as:'carrinho_produto',
            through:'carrinhos_has_produtos',
            foreignKey:'carrinhos_id',
            otherKey:'produtos_id',
            timestamps: false
        })   
    }

    return produto
}