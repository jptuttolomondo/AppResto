const { Producto, Mesa, User, Item, Comanda } = require("../../db");
require("dotenv").config;
const { getComandas, deleteComanda,getItem,mesa1,usuario1 } = require("../helpers/comanda");
module.exports = {
  async get(req, res) {
    let idComanda=req.params;
    let infoTotal;
    console.log(idComanda);
    if(!idComanda){
     infoTotal = await getComandas();

    } else{
       infoTotal= await getComandas(idComanda)

    }
    res.status(200).json(infoTotal);
  },

  async post(req, res) {
    try {
      let { mesa, estado, total, tipoDePago, usuario, items } = req.body;
      let getuser = await User.findOne({ where: { nombre: usuario } });
      let getmesa = await Mesa.findOne({ where: { mesa: mesa } });

      //no podemos saber si una comanda exactamente igual a otra fue creada por error o no
      //eso hay que controlarlo en front. Pruede haber 2 comandas exactamente iguales y ser legales las dos
//entonces es create directamente
    const registro = await Comanda.create({
        
          estado: estado,
          total: total,
          tipoDePago: tipoDePago,
          mesaIdMesa: getmesa.id_mesa,
          userIdUser: getuser.id_user,
          
        
      });
      console.log(registro)
      await Promise.all(
        items.map(async (elemitem) => {
          let productoId = await Producto.findOne({
            where: { productName: elemitem.productoNombre },
          });
          let regItem = await Item.create({
      
              cantidad: elemitem.cantidad,
              totalParcial: elemitem.totalParcial,
              comandaId: registro.id,
              productoId: productoId.id,
          
          });
        })
      );

      
     //  if (created === false) res.status(200).send("el comanda ya existe");
      // else
      
      res.status(200).send("Comanda creada correctamente");
    } catch (error) {
      res.status(400).send(error);
 
    }
  },
async getComandaPorId(req, res){
  try {
    let id = req.params.id;
    console.log(id)

    let comandaPorId = await Comanda.findByPk(id,{
  include: {
          model: Producto,
          througth: { attributes: ["productname", "description", "userIdUser"] },
        }
    });
    console.log(comandaPorId)
    if (comandaPorId) {
     
      console.log('comandaPorId!!!!!!!!!!!!!!!!:',comandaPorId)
      let salida = {
        usuario: await usuario1(comandaPorId.userIdUser),
        id_comanda: comandaPorId.id,
        mesa: await mesa1(comandaPorId.mesaIdMesa),
        fecha: comandaPorId.createdAt.toLocaleDateString(),
        hora: comandaPorId.createdAt.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        estado: comandaPorId.estado,
        tipoDePago: comandaPorId.tipoDePago,
        total: comandaPorId.total,
        items:   await getItem(comandaPorId.id),
      }


      
      res.status(200).send(salida);
    } else res.send("La comanda no existe");
  } catch (error) {
    res.send(error);
    console.log("Fail database connection");
  }
},
  async delete(req, res) {
    try {
      let id = req.params.id;
      let existe = await Comanda.findAll({ where: { id: id } });
      if (existe.length > 0) {
        deleteComanda(id);
        res.send("Comanda  borrada correctamente");
      } else res.send("La comanda no existe");
    } catch (error) {
      res.send(error);
      console.log("Fail database connection");
    }
  },
};
