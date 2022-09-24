const sequelize = require('sequelize');
const { DataTypes}= require('sequelize');
module.exports=(sequelize)=>{
   sequelize.define('mesa',{
      id_mesa:{type:DataTypes.UUID,
         defaultValue:DataTypes.UUIDV4,
         allowNull:false,
         primaryKey:true
       },
       mesa:{type:DataTypes.ENUM('A','B','C','D','E','F','G','H','I','J','K','L','M','N'),allowNull:false },
    }
   )
} 