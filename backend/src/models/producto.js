const sequelize = require('sequelize');
const { DataTypes}= require('sequelize');
module.exports=(sequelize)=>{
   sequelize.define('producto',{
    id:{type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
      },
productName:{type:DataTypes.STRING,allowNull:false},
image:{type:DataTypes.STRING,allowNull:false},
category:{type:DataTypes.ENUM('Desayunos y Meriendas','Bebidas','Aperitivos','Platos con carne','Tortas y Postres','Sopas','Varios'),allowNull:false}, 
description:{type:DataTypes.STRING,allowNull: false},
precio:{type:DataTypes.INTEGER,allowNull:false}
   
   })
}