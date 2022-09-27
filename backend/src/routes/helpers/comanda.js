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

const getComandas = async () => {
  let comandasCompleta = await Comanda.findAll({
    include: {
      model: Producto,
      througth: { attributes: ["productname", "description", "userIdUser"] },
    },
  });
  let salida = [];
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
      return salida.push(z);
    })
  );
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

module.exports = { getComandas: getComandas, deleteComanda: deleteComanda };
