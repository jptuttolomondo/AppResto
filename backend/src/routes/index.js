require("dotenv").config();

const { Router, response } = require("express");
const axios = require("axios");
const {Producto,User,Comanda} = require("../db");
const router = Router();


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

const getProducts = async () => {
  return await Producto.findAll({
});

};

const getUsuarios = async () => {
  return await User.findAll({
});

};
//-------------------------------------------------------
router.get("/products", async (req, res) => {
  const infoTotal = await getProducts();
     res.status(200).send(infoTotal);
   } 
);
//-------------------------------------------------------

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
    // include:{
    //   model: Genre,
    //   attributes:['name']
    // }
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
  return await Comanda.findAll({
});

};
router.get("/comandas", async (req, res) => {
  const infoTotal = await getComandas();
     res.status(200).send(infoTotal);
   } 
)
router.post("/comanda", async (req, res) => {
let {mesa,estado,total,tipoDePago,userIdUser}=req.body

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
else {res.send("Comanda creada correctamente");

  // let genreDb = await Genre.findAll({
  //   where: { name: genres }, //genero hay que encontrarlo en el modelo de bd que ya esta guyardado
  //   //y que coincida con el seleccionado en el formulario de front, que sera genres
  // });
  // productCreated.addGenre(genreDb);
 
}
})

async function deleteComanda(id){
  await Comanda.destroy({
    where:{id:id},
    // include:{
    //   model: Genre,
    //   attributes:['name']
    // }
  })
  
  }
  
  router.delete('/deleteComanda/:id',async (req,res)=>{
  let id=req.params.id
  console.log(id)
  let existe=await Comanda.findAll({ 
    where: {id:id},
  })
  if(existe.length > 0) { console.log(id)
                      deleteComanda(id)
                       res.send('Comanda  borrada correctamente')}
  else res.send('La comanda no existe')
 
  })
//----------------------------------------------------------------







// router.get("/genres", async (req, res) => {
//   const genreApi = await axios.get(
//     `https://api.rawg.io/api/genres?key=${APIKEY}`
//   );
//   const genero = genreApi.data.results.map((e) => e.name);
//   genero.forEach((el) => {
//     Genre.findOrCreate({
//       where: { name: el },
//     });
//   });
//   const allGenres = await Genre.findAll();
//   res.send(allGenres);
// });
// //-------------------------------------------------------

// router.get("/platforms", async (req, res) => {
//   const platformApi = await axios.get(
//     `https://api.rawg.io/api/platforms?key=${APIKEY}`
//   );
//   const plataforma = platformApi.data.results.map((e) => e.name);
//   console.log(plataforma);
//   res.send(plataforma);
// });

//-------------------------------------------------------

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
else res.send("Producto creado correctamente");

  // let genreDb = await Genre.findAll({
  //   where: { name: genres }, //genero hay que encontrarlo en el modelo de bd que ya esta guyardado
  //   //y que coincida con el seleccionado en el formulario de front, que sera genres
  // });
  // productCreated.addGenre(genreDb);
 
});

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

async function deleteProduct(name){
await Producto.destroy({
  where:{productName:name},
  // include:{
  //   model: Genre,
  //   attributes:['name']
  // }
})

}

router.delete('/delete/:name',async (req,res)=>{
let nombre=req.params.name

console.log(nombre)
deleteProduct(nombre)
res.send('producto borrado correctamente')
})

module.exports = router;
