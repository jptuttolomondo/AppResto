const sequelize = require('sequelize');
const { DataTypes}= require('sequelize');
module.exports=(sequelize)=>{
   sequelize.define('user',{
      id_user:{type:DataTypes.UUID,
         defaultValue:DataTypes.UUIDV4,
         allowNull:false,
         primaryKey:true
       },
       user_profile:{type:DataTypes.ENUM('ADMIN','MOZO','CAJERO'),allowNull:false },
nombre:{type:DataTypes.STRING,allowNull: false}

    }
   )
} 