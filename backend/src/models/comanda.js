const sequelize = require('sequelize');
const { DataTypes}= require('sequelize');
module.exports=(sequelize)=>{
   sequelize.define('comanda',{
    id:{type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
      },
   

estado:{type:DataTypes.ENUM('PENDIENTE','TOMADO',
'EN ESPERA','PREPARANDO','LISTO PARA SERVIR',
'SERVIDO','MODIFICADO','COBRADO')
,allowNull:false},
total:{type:DataTypes.INTEGER,allowNull:false},
tipoDePago:{type:DataTypes.ENUM('EFECTIVO','TARJETA DE CREDITO/DEBITO','TRANFERENCIA'),allowNull:false }
     },{timeStamps:true,allowNull:false}
   )
}