const sequelize = require('sequelize');
const { DataTypes}= require('sequelize');
module.exports=(sequelize)=>{
   sequelize.define('mozo',{

nombre:{type:DataTypes.STRING,allowNull: false}      
    }
   )
} 