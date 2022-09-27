require("dotenv").config;
const { Producto } = require("../../db");
const getProducts = async () => {
  return await Producto.findAll({});
};

const deleteProduct = async (name) => {
  await Producto.destroy({
    where: { productName: name },
  });
};
module.exports = { getProducts: getProducts, deleteProduct: deleteProduct };
