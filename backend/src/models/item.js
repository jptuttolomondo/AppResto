const sequelize = require('sequelize');
const { DataTypes}= require('sequelize');
module.exports=(sequelize)=>{
   sequelize.define('item',{
      id_item:{type:DataTypes.UUID,
         defaultValue:DataTypes.UUIDV4,
         allowNull:false,
         primaryKey:true
       },
       cantidad:{type:DataTypes.INTEGER,allowNull: false},
totalParcial:{type:DataTypes.INTEGER,allowNull: false}

    }
   )
} 