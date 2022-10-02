const { Category } = require("../../db");
require("dotenv").config;
const { getCategories, deleteCategory } = require("../helpers/category");
module.exports = {
  async get(req, res) {
    const infoTotal = await getCategories();
    const salida = infoTotal.map((el) => {
      return el.category_name;
    });
    res.status(200).json(salida);
  },
  async post(req, res) {
    let {category_name } = req.body;
    let [datapost, created] = await Category.findOrCreate({
      where: {
        //id_category: id_category,
        category_name: category_name,
      },
    });
    if (created) res.status(200).json("Categoría Creada");
    else res.status(200).json("La categoría ya existe");
  },

  async delete(req, res) {
    try {
      let nombre = req.params.category_name;

      let buscado = await Category.findOne({
        where: { category_name: nombre },
      });
      if (buscado === null) res.status(400).json("Categoría no existe");
      else {
        const borrado = await deleteCategory(nombre);
        res.status(200).json("categoría Borrada");
      }
    } catch (error) {
      res.status(400).json("Error database connection");
    }
  },
};
