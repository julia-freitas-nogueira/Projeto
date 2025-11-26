import { DataTypes } from "sequelize";

import mysql from "./mysql.js";

const Usuario = mysql.define('Usuario', {

    nome: DataTypes.STRING,

    nome_usuario: DataTypes.STRING,

    senha: DataTypes.STRING,

    email: DataTypes.STRING,

    endereco: DataTypes.STRING,
    
    cpf: DataTypes.STRING,

    idade: DataTypes.INTEGER,

    sexo: DataTypes.STRING

});



const Animal = mysql.define('Animal', {

    nome: DataTypes.STRING,

    especie: DataTypes.STRING,

    raca: DataTypes.STRING,

    sexo: DataTypes.STRING

    

});



const Doacao = mysql.define('Doacao', {

    data: DataTypes.DATEONLY

});



const ONG = mysql.define('ONG', {

    razsoc: DataTypes.STRING,
    
    nome_usuario: DataTypes.STRING,

    cnpj: DataTypes.STRING,

    email: DataTypes.STRING,

    senha: DataTypes.STRING,

    endereco: DataTypes.STRING

    

});



Animal.belongsTo(Usuario)
Usuario.hasMany(Animal)

Doacao.belongsTo(Usuario)
Usuario.hasMany(Doacao)

Doacao.belongsTo(Animal)
Animal.hasMany(Doacao)

Animal.belongsTo(ONG)
ONG.hasMany(Animal)

mysql.sync();

export { Usuario, Animal, Doacao, ONG, mysql };