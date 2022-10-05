require("dotenv").config;
const { Producto,Category } = require("../../db");
const getProducts = async () => {
 
 
 let salidaProd=await Producto.findAll({});//para cada producto, poner la categoria

let salida= await Promise.all( salidaProd.map(async el=>{

let categ= await Category.findOne({
  where: {id_category:el.categoryIdCategory}
})
let salida1={
      id: el.id,
      productName:el.productName,
      image:el.image,
      description:el.description,
      precio:el.precio,
      categoria: categ.category_name
}
return salida1
    }

))

console.log(salida)
return salida

};

const deleteProduct = async (name) => {
  await Producto.destroy({
    where: { productName: name },
  });
};
module.exports = { getProducts: getProducts, deleteProduct: deleteProduct };
