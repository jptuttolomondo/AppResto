import { useState,useEffect } from 'react';
import{ getAllMesas,getComandaId } from '../actions'
import { useDispatch, useSelector } from "react-redux";
import logo from '../assets/undraw_conversation_re_c26v 1.png'
import botonMas from'../assets/bxs-plus-circle 1.svg'
import './atencionMesas.css';
import {Link} from 'react-router-dom'
export function AtencionMesas() {
let fecha =new Date()
const mesas= useSelector((state)=>state.mesas)
const comandas=useSelector((state)=>state.comanda)
console.log(mesas)
const dispatch=useDispatch()
console.log(fecha)
console.log(comandas)
useEffect(()=>{
dispatch(getAllMesas())
dispatch(getComandaId("120cc6a3-8bca-47c5-b67b-a80913dd35d1"))
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
<div>{comandas.items.map(e=>{
  return (
  <div >
  <div>{e.cantidad}</div>
  <div>{e.productoNombre}</div>
  <div>{e.totalParcial}</div>
  <div>{e.Precio}</div>

    </div>
  )}
  )}
</div>






<div className="Mesas-total">Total:{comandas.total}</div>
<div className="Mesas-agregarPedido">Nuevo Item</div>
<div className="Mesas-nuevaMesa">Nueva Mesa</div>
<Link to ="/mesasPortada"><div className="Mesas-mas"><img src={botonMas} alt='' /></div></Link>
<div className="Mesas-logo"><img src={logo} alt='' /></div>
 </div>
 </div>
  );
}


