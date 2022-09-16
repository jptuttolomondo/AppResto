import React from "react";
import {Link} from "react-router-dom";
import cardFormat from'./card.module.css'
import botonMas from'../assets/bxs-plus-circle 1.svg'
export default function Card({name,description,id,image,precio}){
return(
<div className={cardFormat.cards} key={id}>
   <div className={cardFormat.containerCard} key={id}>
       <div key={id} className={cardFormat.foodcards}title="Click para más detalles..">
         <div className={cardFormat.cardTitle}>{name}</div>
         <div className={cardFormat.cardData}>{description}</div>
         <img src={image} alt='' width="70px" height="50px" />
         <div className={cardFormat.cardData}>$ {precio}<Link to="/mesas">
         < img className ={cardFormat.botonChico} src={botonMas} alt='' width="20px" height="20px"/></Link>
         </div>
         
       </div> 
    </div>
</div>
)
}
