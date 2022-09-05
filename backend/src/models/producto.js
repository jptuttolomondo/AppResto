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
description:{type:DataTypes.STRING,allowNull: false},
precio:{type:DataTypes.INTEGER,allowNull:false}
   
   })
}