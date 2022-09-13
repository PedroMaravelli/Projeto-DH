module.exports = (sequelize, DataType) => {
    const usuario = sequelize.define('Usuario',{
        nome: DataType.STRING,
        sobrenome: DataType.INTEGER,
        email: DataType.STRING,
        data_nascimento: DataType.DATE,
        sexo: DataType.STRING,
        cpf: DataType.CHAR(11),
        telefone: DataType.CHAR(11),
        senha: DataType.STRING,
        confirma_senha: DataType.STRING,
        promocoes: DataType.TINYINT,




        


    },{
        timestamps: false,
        tableName: 'usuarios'
    })

    return usuario






}