import { useState,useEffect } from 'react';
import{ getAllMesas,getComandaId } from '../actions'
import { useDispatch, useSelector } from "react-redux";
import logo from '../assets/undraw_conversation_re_c26v 1.png'
import botonMas from'../assets/bxs-plus-circle 1.svg'
import './atencionMesas.css';
import {Link} from 'react-router-dom'
export function AtencionMesas() {
  const dispatch=useDispatch()
let fecha =new Date()
const mesas= useSelector((state)=>state.mesas)
const comandas=useSelector((state)=>state.comanda)
console.log(mesas)
let aux=[]
aux=comandas.items


  

//let muestraComanda=comandas.items

//console.log('muestracomanda:',muestraComanda)
console.log(fecha)

useEffect(()=>{
dispatch(getAllMesas())
dispatch(getComandaId("38786180-81ec-4951-872d-adbeaa35a340"))
},[dispatch])

  return (
    <div align="center">
<div className="Mesas-body">
      <div className="Mesas-header">
      <div className="Mesas-titulo">Aplicación para <br></br> Restaurantes/Café</div>
      </div>
  <Link to="/home"><div className="Mesas-atras">Atras</div></Link>    
<div className="Mesas-subtitulo">Atención de mesas</div>
<div className="Mesas-tablaItems"></div>
<div className="Mesas-fecha">Fecha:{fecha.toLocaleDateString()}</div>
<div className="Mesas-hora">Hora:{fecha.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}</div>
<div className="Mesas-mesa">Mesa:

<select >
<option value='seleccionar'>Mesa</option>
{mesas.map((el)=>(
<option value={el} key={el} >{el} </option> 
  ))}
</select>
</div>
<div className="encabezadoItems"></div>
<div className="cantidad">Cantidad</div>
<div className="producto">Producto</div>
<div className="precioUnitario">P.Unit</div>

<div className="items" key="cantidad">{comandas.items?.map(e=>{
  return(
<div >
      <div class='filaItem1'>{e.cantidad}</div>
      <div className='filaItem2'>{e.productoNombre}</div> 
      <div className='filaItem3'>{e.totalParcial} </div>
   </div>
  ) 
})}</div>




<div className="Mesas-total">Total:{comandas.total}</div>
<div className="Mesas-agregarPedido">Nuevo Item</div>
<div className="Mesas-nuevaMesa">Nueva Mesa</div>
<Link to ="/mesasPortada"><div className="Mesas-mas"><img src={botonMas} alt='' /></div></Link>
<div className="Mesas-logo"><img src={logo} alt='' /></div>
 </div>
 </div>
  );
}


