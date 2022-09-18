module.exports = (sequelize, DataType) => {
    const carrinho = sequelize.define('Carrinho',{
        status: DataType.STRING,
        usuarios_id: DataType.INTEGER


    },{
        timestamps: false,
        tableName: 'carrinhos'
    })

    carrinho.associate = (models)=>{
        carrinho.belongsTo(models.Usuario,{
            as:'usuario_carrinho',            
            foreignKey:'usuarios_id'
        })   
    }

    carrinho.associate = (models)=>{
        carrinho.belongsToMany(models.Produto,{
            as:'carrinho_produto',
            through:'carrinhos_has_produtos',
            foreignKey:'carrinhos_id',
            otherKey:'produtos_id',
            timestamps: false
        })   
    }

    return carrinho

}