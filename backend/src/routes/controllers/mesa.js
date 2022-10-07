const { Mesa } = require("../../db");
require("dotenv").config;

module.exports = {
  async get(req, res) {
   // const infoTotal = await getCategories();
   const mesas= await Mesa.findAll({}); 
   console.log(mesas)  
    const salida = mesas.map((el) => {
      return el.mesa;
    });
    res.status(200).json(salida);
  },
}