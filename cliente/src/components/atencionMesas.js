import { useState,useEffect } from 'react';
import{ getAllMesas,getComandaId,getMozo } from '../actions'
import { useDispatch, useSelector } from "react-redux";
import './atencionMesas.css';
import {Link} from 'react-router-dom'
export function AtencionMesas() {
  const dispatch=useDispatch()
let fecha =new Date()
const mesas= useSelector((state)=>state.mesas)
const comandas=useSelector((state)=>state.comanda)
const user=useSelector((state)=>state.user)

useEffect(()=>{
dispatch(getAllMesas())
dispatch(getComandaId("38786180-81ec-4951-872d-adbeaa35a340"))
dispatch(getMozo("Gloria"))
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
      <div class='filaItem2'>{e.productoNombre}</div> 
      <div class='filaItem3' >{e.totalParcial} </div>
   </div>
  ) 
})}</div>

<div className="Mesas-total">Total:{comandas.total}</div>
<div className="Mesas-agregarPedido">Nuevo Item</div>
<div className="Mesas-nuevaMesa">Nueva Mesa</div>
<Link to ="/mesasPortada"><div className="Mesas-mas"><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666824874/appresto/bxs-plus-circle_1_edfipo.svg" alt='' /></div></Link>
<div className="Mesas-logo"><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666824693/appresto/undraw_conversation_re_c26v_1_qbzozn.png" alt='' /></div>
<div className='Mozo'>Mozo:{user} </div>
 </div>
 </div>
  );
}


