const { Producto,Category } = require("../../db");
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
      let categoria=await Category.findOne({
        where:{category_name: category}
      })
      console.log(categoria.id_category)
      await Producto.findAll({
        where: { productName: productName },
      });
      let [registro, created] = await Producto.findOrCreate({
        where: {
          productName:productName,
          description:description,
          categoryIdCategory:categoria.id_category,
          image:image,
          precio:precio,
        },
      });
      if (created === false) res.status(200).send("El producto ya existe");
      else res.status(200).send("Producto creado corerctamente");
    } catch  { res.status(400).send("Fail database connection");}
     
    
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
