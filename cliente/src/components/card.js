import React from "react";
//import {Link} from "react-router-dom";
import cardFormat from'./card.module.css'

export default function Card({name,description,id,image,precio,key}){
return(
<div className={cardFormat.cards} key={id}>
   <div className={cardFormat.containerCard} key={id}>
       <div key={id} className={cardFormat.foodcards}title="Agregar a la comanda">
         <div className={cardFormat.cardTitle}>{name}</div>
         <div className={cardFormat.cardData}>{description}</div>
         <div className={cardFormat.cardData}>$ {precio}</div>
         <img id={id} src= {image} title="Click para agrandar la foto.." alt='' width="70px" height="50px"/>
         < img className ={cardFormat.botonChico} src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666823677/appresto/bxs-plus-circle_1_meyxib.png"
          alt='' width="20px" height="20px"/>
      
         
       </div> 
    </div>
</div>
)
}
/*   <Link to="/zoom">*/
/*</Link>*/
/*title="Click para agrandar la foto.." alt='' width="70px" height="50px"*/