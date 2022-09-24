require("dotenv").config();
const { Router} = require("express");
//const axios = require("axios");
const {Producto,User,Comanda} = require("../db");
const router = Router();
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

router.post("/users", async (req, res) => {
let { user_profile,nombre}=req.body
await User.findAll({
  where: {nombre:nombre},
})
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
const getComandas = async () => { 

  let comandasCompleta= await Comanda.findAll({
include:{
  model: Producto,
througth: {attributes: ['productname','description','userIdUser'],},
},
});

async function usuario1 (idusuario){ 
    let q= await User.findByPk(idusuario)
return q.nombre
} 
let salida=[]
await Promise.all(
  comandasCompleta.map(async e=>{
    let z= {
    id:e.id,
    mesa:e.mesa,
    fecha:e.createdAt.toLocaleDateString(),
    hora:e.createdAt.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
    total:e.total,
    productos:e.productos.map(elem=>{
      let prod={
        prodNombre: elem.productName,
        precio:elem.precio
      }
     return prod
    }),
    usuario :await usuario1(e.userIdUser) 
  }
  return salida.push(z)
})
)
return salida
};



router.get("/comandas", async (req, res) => {
  const infoTotal = await getComandas();
     res.status(200).send(infoTotal);
   } 
)

router.post("/comanda", async (req, res) => {
let {mesa,estado,total,tipoDePago,userIdUser,pedido}=req.body
await Comanda.findAll({
  where: {mesa:mesa,estado:estado},
})
let [registro,created]=await Comanda.findOrCreate({
    where: {mesa:mesa,
    estado:estado,
    total:total,
    tipoDePago:tipoDePago,
    userIdUser:userIdUser
   }
  });
if(created===false) res.send('La comanda ya existe');
else {
  for (let i=0; i<pedido.length; i++){
  let productodb=await Producto.findAll({ where: {productName:pedido[i]}})
  registro.addProducto(productodb)
    }
  res.send("Comanda creada correctamente");
}
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
module.exports = router;






//-------------------------------------------------------

// router.get("/videogame/:id", async (req, res) => {
  
//   let id = req.params.id;
//   let videosTotal;
//   console.log(id)
//   try{

//    if(id.includes('-')===false){
  
//       const apiUrl = await axios.get(
//         `https://api.rawg.io/api/games/${id}?key=${APIKEY}`
//       );
     
//       let array = [];
//       let e = {
//         id: apiUrl.data.id,
//         name: apiUrl.data.name,
//         released: apiUrl.data.released,
//         background_image: apiUrl.data.background_image,
//         rating: apiUrl.data.rating,
//         platforms: apiUrl.data.parent_platforms.map((e) => e.platform.name),
//         genres: apiUrl.data.genres?.map((e) => e.name),
//         description: apiUrl.data.description,
//       };
//       array.push(e);
    

//     videosTotal = array
//   console.log(videosTotal)
//    }
//  else{ let fromDb=await getDbInfo()
//         videosTotal=fromDb.filter(elem=>elem.id===id)

// }


// videosTotal.length? res.status(200).json(videosTotal)
//                      : res.status(404).send("videogame no encontrado");
// }   
// catch(error){
//   res.status(404).send(console.log("videogame no encontrado al fiunañl"))
// }       
// });
//-------------------------------------------------------


//------------------------------------------------------
// const getApiInfo = async () => {
//   let promises = [];
//   let allGames = [];
//   try {
//     let url = `https://api.rawg.io/api/games?key=${APIKEY}`;
//     for (let i = 0; i < 5; i++) {
//       let apiVideo = await axios.get(url).then((response) => {
//         return response;
//       });
//       promises = promises.concat(apiVideo);
//       url = apiVideo.data.next;
//     }

//     await Promise.all(promises).then((response) => {
//       for (let i = 0; i < promises.length; i++) {
//         allGames = allGames.concat(
//           response[i].data.results.map((el) => {
//             return {
//               id: el.id,
//               name: el.name,
//               released: el.released,
//               genres: el.genres.map((e) => {
//                 return { name: e.name };
//               }),
//               platforms: el.platforms.map((e) => {
//                 return { name: e.platform.name };
//               }),
//               rating: el.rating,
//               background_image: el.background_image,
//             };
//           })
//         );
//       }
//     });

//     return allGames;
//   } catch (error) {
//     console.log(error);
//   }
// };
//-------------------------------------------------------
// const getDbInfo = async () => {
//   return await Producto.findAll({
  
//   });
// }; 
//-------------------------------------------------------
