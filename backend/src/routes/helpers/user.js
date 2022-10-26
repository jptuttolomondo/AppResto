require("dotenv").config;
const { User } = require("../../db");
const getUsuarios = async (name) => {
  try {

    console.log('nombre:', name)
if(!name)
{

    let salida1 = await User.findAll({});
    let salida = salida1.map((e) => {
      let salemap = {
        nombre: e.nombre,
        user_profile: e.user_profile,
      };
      return salemap;
    });
    return salida;
  }
  else{
let salida2=await User.findOne({
  where : {
    nombre:name
  }

})
return salida2.nombre


  }
  } catch (error) {
    res.send(error);
    console.log("Fail database connection");
  }
};
const deleteUser = async (name) => {
  try {
    await User.destroy({
      where: { nombre: name },
    });
  } catch (error) {
    res.send(error);
    console.log("Fail database connection");
  }
};
module.exports = { getUsuarios: getUsuarios, deleteUser };
