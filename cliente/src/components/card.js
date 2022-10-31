import React from "react";
import {Link} from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";

import { useEffect,useState } from "react";

import { getComandaId } from "../actions";
import cardFormat from'./card.module.css'

export default function Card({name,description,id,image,precio,key}){

   const dispatch=useDispatch()

   const comandas=useSelector((state)=>state.comanda)

const [items,setItems]=useState({
   cantidad: '' ,
   precio:'',
   productoNombre:'',
   totalParcial:''

})
   
   useEffect(()=>{
   dispatch(getComandaId("38786180-81ec-4951-872d-adbeaa35a340"))
// setItems({
//    cantidad: aux[0]+1,
//    productoNombre:name,
//    precio:precio,
//    totalParcial:precio*(aux[0]+1)
//   }

//)
   },[dispatch])


function handleSubmit(e){
e.preventDefault()
console.log(comandas)
console.log(comandas.items)
let aux=comandas.items.map(el=>{
   if(el. productoNombre===name) return  el.cantidad
   else return false
})
alert('agregado')
console.log(aux[0])
//setInput({...input,[e.target.name]:e.target.value})

if (aux[0]!==false) setItems({...{
cantidad: aux[0]+1,
 productoNombre:name,
 precio:precio,
 totalParcial:precio*(aux[0]+1)
}})  
else setItems({...items,

   cantidad:1,
   productoNombre:name,
   precio:precio,
   totalParcial:precio
  })


console.log(items)

}



return(
<div className={cardFormat.cards} key={id}>
<form onSubmit={(e)=>handleSubmit(e)} >
   <div className={cardFormat.containerCard} key={id}>
       <div key={id} className={cardFormat.foodcards}title="Agregar a la comanda">
         <div className={cardFormat.cardTitle}>{name}</div>
         <div className={cardFormat.cardData}>{description}</div>
         <div className={cardFormat.cardData}>$ {precio}</div>
         <img id={id} src= {image} title="Click para agrandar la foto.." alt='' width="70px" height="50px"/>
        <button type="submit" > < img className ={cardFormat.botonChico} src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666823677/appresto/bxs-plus-circle_1_meyxib.png"
          alt='' width="20px" height="20px"/></button>  
      
         
       </div> 
    </div>
    </form>
</div>
)
}


/*title="Click para agrandar la foto.." alt='' width="70px" height="50px"*/