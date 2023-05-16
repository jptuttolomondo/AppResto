import {useEffect } from 'react';
import{ getAllMesas,getMozo,getAllProducts,incrementar } from '../actions'
import { useDispatch, useSelector } from "react-redux";
import './atencionMesas.css';
import {Link} from 'react-router-dom'
export function AtencionMesas() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAllMesas())
    dispatch(getAllProducts())
    //dispatch(getComandaId("a6ae3949-a6fd-404f-9bd3-8ed6e99535b5"))//rremplazar por nueva comanda
    dispatch(getMozo("6456e2af771cf3af7ab16cd1")) //un id de mozo activo user
    },[dispatch])
let fecha =new Date()
const mesas= useSelector((state)=>state.mesas)
const comandas=useSelector((state)=>state.comanda)
const productos=useSelector((state)=>state.products)
//hay que crear una comanda vacia que devuelva un id y crearle todos los datos
const user=useSelector((state)=>state.user)
console.log(user.firstName)
console.log('mesas front',mesas)
console.log(productos)
// useEffect(()=>{
// dispatch(getAllMesas())
// dispatch(getAllProducts())
//dispatch(getComandaId("a6ae3949-a6fd-404f-9bd3-8ed6e99535b5"))//rremplazar por nueva comanda
// dispatch(getMozo("6456e2af771cf3af7ab16cd1")) //un id de mozo activo user
// },[dispatch])
//hay que guardar la nueva comanda con un post o un put si ya existe

function handleCantidad(e){
  dispatch(incrementar(e.cantidad))
}
function handleProduct(e){
  dispatch(incrementar(e.cantidad))
}
function handleMesas(e){
  dispatch(incrementar(e.cantidad))
}
  return (
    <div align="center">
<div className="Mesas-body">
      <div className="Mesas-header">
      <div className="Mesas-titulo">Aplicación para <br></br> Restaurantes/Café</div>
      </div>
  <Link to="/home"><div className="Mesas-atras">Atras</div></Link>    

<div className="Mesas-tablaItems"></div>
<div className="Mesas-fecha">Fecha:{fecha.toLocaleDateString()}</div>
<div className="Mesas-hora">Hora:{fecha.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}</div>
<div className="Mesas-mesa">Mesa:

<select onChange={(e)=>handleMesas(e)}className="Mesas">
<option value='seleccionar'>sel</option>
{mesas.map((el)=>(
<option value={el._id} key={el._id} >{el.mesa} </option> 
))}
</select>
</div>
<div><button className="Mesas-boton-cantidad" onClick={()=>handleCantidad()}>+</button>
</div>
<div  className="Mesas-producto">Item:

<select onChange={(e)=>handleProduct(e)} >
<option value='seleccionar'>Productos</option>
{productos.map((el)=>(
<option value={el} key={el._id} >{el.productName} </option> 
))}
</select>
</div>


<div className="encabezadoItems"></div>
<div className="cantidad">Cantidad</div>
<div className="producto">Producto</div>
<div className="precioUnitario">P.Unit</div>

<div className="items">{/*comandas.items?.map((e,index)=>{//al ser un array sin indice se le agrega para la key
  return(
<div key={index}>
      <div className='filaItem1'>{e.cantidad}</div>
      <div className='filaItem2'>{e.productoNombre}</div> 
      <div className='filaItem3' >{e.totalParcial} </div>
   </div>
  ) 
})*/}</div>

<div className="Mesas-total">Total:{/*comandas.total*/}</div>
<div className="Mesas-agregarPedido">Nuevo Item</div>
<div className="Mesas-nuevaMesa">Nueva Mesa</div>
<Link to ="/mesasPortada"><div className="Mesas-mas"><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666824874/appresto/bxs-plus-circle_1_edfipo.svg" alt='' /></div></Link>
<div className="Mesas-logo"><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666824693/appresto/undraw_conversation_re_c26v_1_qbzozn.png" alt='' /></div>
<div className='Mozo'>Mozo:{user.firstName} </div>
 </div>
 </div>
  );
}


