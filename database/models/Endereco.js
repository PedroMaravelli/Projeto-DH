module.exports = (sequelize, DataType) => {
    const endereco = sequelize.define('Endereco', {
        pais: DataType.STRING,
        estado: DataType.STRING,
        cidade: DataType.STRING,
        rua:DataType.STRING,
        numero:DataType.INTEGER,
        complemento: DataType.STRING,
        cep: DataType.STRING,


    },{
        timestamps: false,
        tableName: 'enderecos'
    })

    return endereco
}