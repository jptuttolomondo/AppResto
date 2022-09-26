const sequelize = require('sequelize');
const { DataTypes}= require('sequelize');
module.exports=(sequelize)=>{
   sequelize.define('comanda',{
    id:{type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
      },
   
      estado:{type:DataTypes.ENUM('PENDIENTE','COBRADO','PREPARANDO','SERVIDO','TOMADO','MODIFICADO','LISTO PARA SERVIR'),allowNull:false },
// estado:{type:DataTypes.ENUM('PENDIENTE','TOMADO',
// 'EN ESPERA','PREPARANDO','LISTO PARA SERVIR',
// 'SERVIDO','MODIFICADO','COBRADO')
// ,allowNull:false},
total:{type:DataTypes.INTEGER,allowNull:false},
tipoDePago:{type:DataTypes.ENUM('EFECTIVO','TARJETA','TRANFERENCIA'),allowNull:false }
     }
   )
}


