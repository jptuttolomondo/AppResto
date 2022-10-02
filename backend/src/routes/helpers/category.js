require("dotenv").config;
const { Category } = require("../../db");
const getCategories = async () => {
    try {
  return await Category.findAll({});
    } catch  { console.error('Error Database connection')}
};

const deleteCategory = async (name) => {
    try {
  let borrado=await Category.destroy({
    where: { category_name: name },
  });
  console.log('Category deleted')
  return borrado
} catch{ console.error('Error Database connection')}
};

module.exports = { getCategories: getCategories, deleteCategory: deleteCategory };
