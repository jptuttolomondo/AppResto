require("dotenv").config();
const { Router} = require("express");
const router = Router();
const {Producto,User,Comanda,Mesa,Item} = require("../db");


////////////////////////////////  //////////////////////////////////////////////////




 const products = require("./controllers/producto");
// const product = require("./product");
// const categories = require("./categories");
// const customer = require("./customer");
// const payment = require("./payment");
// const page404 = require("./404");

// const nodeMailer = require("./mailer");
// const orderById = require("./order");
// const ordersGet = require("./orders");
// const cart = require("./cart");
// const comment = require("./comment");
// const commentUser = require("./commentUser");
// const comments = require("./comments");
// const carrito = require("./cart");

// router.use("/products", products);
// router.use("/categories", categories);
// router.use("/product", product);
// router.use("/customer", customer);
// router.use("/payment", payment);
// router.use("/mailer", nodeMailer);
// router.use("/orders", ordersGet);
// router.use("/order", orderById);
// router.use("/cart", cart);
// router.use("/comments", comments);
// router.use("/comment", comment);
// router.use("/commentUser", commentUser);
// router.use("/cart", carrito);

//------------------------todas las rutas antes del *!!!!!!!!!!
//router.use("*", page404);
















//------------------------------------------------------------------------------

//-------------------------------------------------------products
const getProducts = async () => {
  return await Producto.findAll({
});
};

router.get("/products", async (req, res) => {
  const infoTotal = await getProducts();
     res.status(200).send(infoTotal);
   } 
);

router.post("/products", async (req, res) => {
  let {
    productName,
    category,
    description,
    image,
    precio,
    } = req.body;
await Producto.findAll({
  where: {productName: req.body.productName},
})
let [registro,created]=await Producto.findOrCreate({
    where: {productName: req.body.productName,
    productName,
    description,
    category,
    image,
    precio}
  });
if(created===false) res.send('el producto ya existe');
else 
  res.send("Producto creado correctamente");
});

async function deleteProduct(name){
  await Producto.destroy({
    where:{productName:name},
  })
  }
  
  router.delete('/delete/:name',async (req,res)=>{
  let nombre=req.params.name
  deleteProduct(nombre)
  res.send('producto borrado correctamente')
  })

//-------------------------------------------------------users
const getUsuarios = async () => {
  return await User.findAll({
});
};

router.get("/users", async (req, res) => {
  const infoTotal = await getUsuarios();
     res.status(200).send(infoTotal);
   } 
)

router.post("/user", async (req, res) => {
let { user_profile,nombre}=req.body
let [registro,created]=await User.findOrCreate({
    where: {nombre: nombre,
    user_profile, 
   }
  });
if(created===false) res.send('el usuario ya existe');
else res.send("Usuario creado correctamente");
}) 

async function deleteUser(name){
  await User.destroy({
    where:{nombre:name},
    })
  
  }
  
  router.delete('/deleteUser/:name',async (req,res)=>{
  let nombre=req.params.name
  let existe=await User.findAll({
    where: {nombre:nombre},
  })
  if(existe.length > 0) { console.log(nombre)
                      deleteUser(nombre)
                       res.send('Usuario borrado correctamente')}
  else res.send('el usuario no existe')
   })
//----------------------------------------------------------------comandas

async function usuario1 (idusuario){ 
    let q= await User.findByPk(idusuario)
return q.nombre
}

async function precioProd(idProducto){
  let q= await Producto.findByPk(idProducto)
  return q.precio
}
async function precioNom(idProducto){
  let q= await Producto.findByPk(idProducto)
  return q.productName
}


async function mesa1  (idmesa){
  let q= await Mesa.findByPk(idmesa)
  return q.mesa  
}
async function getItem(idComanda){
  let q= await Item.findAll({
    where: {comandaId:idComanda},
  }) 
   let salida1= await Promise.all(await q.map(async saleq=>{ 
      let salidaItem={
    cantidad: saleq.cantidad ,
    totalParcial:saleq.totalParcial,
    productoNombre:await precioNom(saleq.productoId),
    precio:await precioProd(saleq.productoId),
    }
  return  salidaItem
  })
   )
return salida1
 } 

const getComandas = async () => { 
let comandasCompleta= await Comanda.findAll({
include:{
  model: Producto,
througth: {attributes: ['productname','description','userIdUser'],},
},
});
let salida=[]
await Promise.all(
    comandasCompleta.map(async e=>{
    let z= {
    usuario :await usuario1(e.userIdUser), 
    id_comanda:e.id,
    mesa:await mesa1(e.mesaIdMesa),
    fecha:e.createdAt.toLocaleDateString(),
    hora:e.createdAt.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}), 
    estado:e.estado,
    tipoDePago:e.tipoDePago,
    total:e.total,
    items:await getItem(e.id),
  }
  return salida.push(z)
})
)
return salida
};


router.get("/comandas", async (req, res) => {
  const infoTotal = await getComandas();
     res.status(200).json(infoTotal);
   } 
)


router.post("/comanda", async (req, res) => {  
let {mesa,estado,total,tipoDePago,usuario,items}=req.body
let getuser=await User.findOne({   where: {nombre:usuario}, }) 
let getmesa=await Mesa.findOne({   where:{mesa:mesa} })
const [registro,created]= await Comanda.findOrCreate({
where:{
  estado:estado,
      total:total,  
      tipoDePago:tipoDePago,   
        mesaIdMesa:getmesa.id_mesa,
     userIdUser:getuser.id_user
}
});
await Promise.all(items.map(async elemitem=>{
let productoId=    await  Producto.findOne({ where: {productName: elemitem.productoNombre}})
let [regItem,regItemCreated]=  await Item.findOrCreate({
where:{
cantidad:elemitem.cantidad,
totalParcial:elemitem.totalParcial, 
comandaId:registro.id,
productoId:productoId.id,
}
})
}))

if(created===false) res.send('el comanda ya existe');
else res.send("comada creado correctamente");

})

async function deleteComanda(id){
  await Comanda.destroy({
    where:{id:id},
    include:{
      model: Producto,
      attributes:['productname']
    }
  })
  }
  
  router.delete('/deleteComanda/:id',async (req,res)=>{
  let id=req.params.id
  let existe=await Comanda.findAll({ where: {id:id} })
  if(existe.length > 0) { deleteComanda(id)
                       res.send('Comanda  borrada correctamente')}
  else res.send('La comanda no existe')
   })
//-------------------------------------------------------
//item---------------------------------------------------



module.exports = router;


