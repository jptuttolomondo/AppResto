import React, { useEffect } from 'react'
import { getAllProducts} from '../actions'

import { useDispatch, useSelector } from 'react-redux'
import Card from './card'





import logo from '../assets/mesa de cafe grande.svg'
import foto from '../assets/denuncia extravio.jpeg'

//import botonMas from'../assets/bxs-plus-circle 1.svg'
import portada from './atencionMesasPortada.module.css'; 
import './prueba.css'
import {Link}from 'react-router-dom';    
export function AtencionMesasPortada() {
const dispatch= useDispatch()

const Allproductos=useSelector((state)=>state.products)

useEffect(()=>{
dispatch(getAllProducts())

},[dispatch])
console.log(Allproductos)
  return (
    <div align="center">
      
<div className={portada.Body}>
<div className={portada.Encabezado}>Aplicación para restaurantes</div>

<div className={portada.containerCard}>

  
  { 
                    Allproductos?.map(e=>{
                        return(
                       <div className={portada.cards} key={e.id} >
                     
                         <Card name={e.productName} description={e.description} image={foto} precio={e.precio} key={e.id} />
                 </div>  

                    
                     )
                     })
            }
  



  </div>
</div>

 

 </div>
  );
}

