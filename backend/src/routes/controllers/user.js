const { User } = require("../../db");
require("dotenv").config;
const { getUsuarios, deleteUser } = require("../helpers/user");
module.exports = {
  async get(req, res) {
let name=req.params.name
  
    try {


      const infoTotal = await getUsuarios(name);


      res.status(200).send(infoTotal);
    } catch (error) {
      console.log("Fail database connection");
    }
  },
  async post(req, res) {
    let { user_profile, nombre } = req.body;
    try {
      let [registro, created] = await User.findOrCreate({
        where: { nombre: nombre, user_profile },
      });
      if (created === false) res.send("el usuario ya existe");
      else res.send("Usuario creado correctamente");
    } catch (error) {
      console.log("Fail database connection");
    }
  },

  async delete(req, res) {
    let nombre = req.params.name;
    try {
      let existe = await User.findAll({
        where: { nombre: nombre },
      });
      if (existe.length > 0) {
        deleteUser(nombre);
        res.send("Usuario borrado correctamente");
      } else res.send("el usuario no existe");
    } catch (error) {
      console.log("Fail database connection or bad URL params");
    }
  },
};
