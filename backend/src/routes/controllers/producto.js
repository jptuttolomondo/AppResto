const { Producto } = require("../../db");
require("dotenv").config;
const { getProducts, deleteProduct } = require("../helpers/producto");
module.exports = {
  async get(req, res) {
    const infoTotal = await getProducts();
    res.status(200).send(infoTotal);
  },

  async post(req, res) {
    try {
      let { productName, category, description, image, precio } = req.body;
      await Producto.findAll({
        where: { productName: productName },
      });
      let [registro, created] = await Producto.findOrCreate({
        where: {
          productName: req.body.productName,
          productName,
          description,
          category,
          image,
          precio,
        },
      });
      if (created === false) res.send("el producto ya existe");
      else res.send("Producto creado correctamente");
    } catch (error) {
      res.send(error);
      console.log("Fail database connection");
    }
  },

  async delete(req, res) {
    try {
      let nombre = req.params.name;
      deleteProduct(nombre);
      res.send("producto borrado correctamente");
    } catch (error) {
      res.send(error);
      console.log("Fail database connection");
    }
  },
};
