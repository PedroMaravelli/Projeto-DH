module.exports = (sequelize, DataType) => {
    const usuario = sequelize.define('Usuario',{
        nome: DataType.STRING,
        sobrenome: DataType.STRING,
        email: DataType.STRING,
        data_nascimento: DataType.DATEONLY,
        sexo: DataType.STRING,
        cpf: DataType.INTEGER,
        telefone: DataType.INTEGER,
        senha: DataType.STRING,
        confirma_senha: DataType.STRING,
        promocoes: DataType.INTEGER
    },{
        timestamps: false,
        tableName: 'usuarios'
    })

    usuario.associate = (models)=>{
        usuario.hasMany(models.Endereco,{
            as:'usuario_endereco',            
            foreignKey:'usuarios_id'
        })   
    }

    usuario.associate = (models)=>{
        usuario.hasMany(models.Carrinho,{
            as:'usuario_carrinho',            
            foreignKey:'usuarios_id'
        })   
    }

    return usuario
}