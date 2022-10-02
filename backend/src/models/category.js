const sequelize = require('sequelize');
const { DataTypes}= require('sequelize');
module.exports=(sequelize)=>{
   sequelize.define('category',{
        id_category:{type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
      },
category_name:{type:DataTypes.ENUM('Desayunos y Meriendas','Bebidas','Aperitivos','Platos con carne','Tortas y Postres','Sopas','Varios'),allowNull:false}, 


     }
   )
}

