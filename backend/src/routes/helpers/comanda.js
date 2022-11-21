require("dotenv").config;
const { Comanda, User, Mesa, Producto, Item } = require("../../db");

const usuario1 = async (idusuario) => {
  let q = await User.findByPk(idusuario);
  return q.nombre;
};

const precioProd = async (idProducto) => {
  let q = await Producto.findByPk(idProducto);
  return q.precio;
};
const precioNom = async (idProducto) => {
  let q = await Producto.findByPk(idProducto);
  return q.productName;
};

const mesa1 = async (idmesa) => {
  let q = await Mesa.findByPk(idmesa);
  return q.mesa;
};
const getItem = async (idComanda) => {
  let q = await Item.findAll({
    where: { comandaId: idComanda },
  });
  let salida1 = await Promise.all(
    await q.map(async (saleq) => {
      let salidaItem = {
        cantidad: saleq.cantidad,
        totalParcial: saleq.totalParcial,
        productoNombre: await precioNom(saleq.productoId),
        precio: await precioProd(saleq.productoId),
      };
      return salidaItem;
    })
  );
  return salida1;
};

const getComandas = async (idComanda) => {
  let {aux}=idComanda
  console.log('idComanda:',idComanda)
  console.log(aux)
  let salida = [];
  if(aux===undefined){
    console.log('hola1')
  let comandasCompleta = await Comanda.findAll({
    include: {
      model: Producto,
      througth: { attributes: ["productname", "description", "userIdUser"] },
    },
  });

  await Promise.all(
    comandasCompleta.map(async (e) => {
      let z = {
        usuario: await usuario1(e.userIdUser),
        id_comanda: e.id,
        mesa: await mesa1(e.mesaIdMesa),
        fecha: e.createdAt.toLocaleDateString(),
        hora: e.createdAt.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        estado: e.estado,
        tipoDePago: e.tipoDePago,
        total: e.total,
        items: await getItem(e.id),
      };
      console.log('hola2')
      return salida.push(z);

    })
  );
  console.log('hola3')
  }else{
    let comandaPorId = await Comanda.findByPk(idComanda
 
      // include: {
      //   model: Producto,
      //   througth: { attributes: ["productname", "description", "userIdUser"] },
      // },
   
    );
    console.log('comandaPorId!!!!!!!!!!!!!!!!:',comandaPorId)
    // let y = {
    //   usuario: await usuario1(comandaPorId.userIdUser),
    //   id_comanda: comandaPorId.id,
    //   mesa: await mesa1(comandaPorId.mesaIdMesa),
    //   fecha: comandaPorId.createdAt.toLocaleDateString(),
    //   hora: comandaPorId.createdAt.toLocaleTimeString([], {
    //     hour: "2-digit",
    //     minute: "2-digit",
    //   }),
    //   estado: comandaPorId.estado,
    //   tipoDePago: comandaPorId.tipoDePago,
    //   total: comandaPorId.total,
    //   items:   await Promise.all(await getItem(comandaPorId.id)),
    // };
    return salida.push('sale11111');


  }

  console.log('salida:',salida)
  return salida;
};

const deleteComanda = async (id) => {
  await Comanda.destroy({
    where: { id: id },
    include: {
      model: Producto,
      attributes: ["productname"],
    },
  });
};

module.exports = { getComandas: getComandas, 
  deleteComanda: deleteComanda,getItem: getItem,
  mesa1: mesa1,usuario1: usuario1};
