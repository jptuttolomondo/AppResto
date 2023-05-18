import {useEffect,useState } from 'react';
import{ getAllMesas,getMozo,getAllProducts,incrementar,postComanda,
  actualizarComanda,actualizarProducto,calcularSubtotal } from '../actions'
import { useDispatch, useSelector } from "react-redux";
import './atencionMesas.css';
import {Link} from 'react-router-dom'



export function AtencionMesas() {
const comanda=useSelector((state) => state.comanda)
const productoNombre=useSelector((state) => state.productoItem)
const subtotalItem=useSelector((state) => state.subtotalItem)
const item=useSelector((state) => state.item)
console.log('item state: ',item)
console.log('comanda de state',comanda)

  const dispatch=useDispatch()
  const [comandaNueva,setComandaNueva]=useState({
      date:'',
      mesa:'',
      estado: '',
      mozo:'',
      total:0,
      items: [
        {
          cantidad:0,
          producto: '',
          subtotalItem:0
        },
       
      ]
    })


  useEffect(()=>{
    dispatch(getAllMesas())
    dispatch(getAllProducts())

    dispatch(actualizarComanda(comanda)) //
    //dispatch(getComandaId("a6ae3949-a6fd-404f-9bd3-8ed6e99535b5"))//rremplazar por nueva comanda
    dispatch(getMozo("6456e2af771cf3af7ab16cd1")) //un id de mozo activo user
    },[dispatch,comanda])



let fecha =new Date()

const mesas= useSelector((state)=>state.mesas)
const cantidad= useSelector((state)=>state.cantidadItem)
//console.log(cantidad)
//console.log(mesas)
//const comandas=useSelector((state)=>state.comanda)
const productos=useSelector((state)=>state.products)
console.log(productos)
//hay que crear una comanda vacia que devuelva un id y crearle todos los datos
const user=useSelector((state)=>state.user)
console.log(user.firstName)
//console.log('mesas front',mesas)
//console.log(productos)




function handleCantidad(e){
  dispatch(incrementar(cantidad))
 
}
function handleProduct(e){
let productoItem=productos.filter(el=>(el.productName===e.target.value))
  
  console.log('producto',productoItem)
   setComandaNueva({...comandaNueva,items:{producto:e.target.value,cantidad:1}})
  // console.log(comandaNueva)

  dispatch(actualizarProducto(e.target.value))
  dispatch(calcularSubtotal(e.target.value))
}
function handleMesas(e){
  //dispatch(incrementar(e.cantidad))
console.log('handlemesas',e.target.value)
  setComandaNueva({...comandaNueva,mesa:e.target.value,mozo:user.firstName})
console.log(comandaNueva)
}



function handleSubmit(e){
  if (comandaNueva.items.length ===0) {
      e.preventDefault()
      alert("No hay productos cargados")
  } else {
  e.preventDefault()
  //console.log(input)
  dispatch(postComanda(comandaNueva))
  //alert('comanda creada..')
  setComandaNueva({
    date:'',
    mesa:'',
    estado: '',
    mozo:'',
    total:0,
    items: [
      {
        cantidad:0,
        producto: '',
        subtotalItem:0
      },
     
    ]
  }
     
  )

}

}




  return (
    <div align="center">
<div className="Mesas-body">
      <div className="Mesas-header">
      <div className="Mesas-titulo">Aplicación para <br></br> Restaurantes/Café</div>
      </div>
  <Link to="/home"><div className="Mesas-atras">Atras</div></Link>    
  <form onSubmit={(e)=>handleSubmit(e)} >



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
<option value={el.mesa} key={el._id} >{el.mesa} </option> 
))}
</select>
</div>
<div><button className="Mesas-boton-cantidad" onClick={()=>handleCantidad()}>+</button>
</div>
<div  className="Mesas-producto">Producto:

<select onChange={(e)=>handleProduct(e)} >
<option value='seleccionar'>Productos</option>
{productos.map((el)=>(
<option value={el.productName} key={el._id} >{el.productName} </option> 
))}
</select>
</div>


<div className="encabezadoItems"></div>
<div className="cantidad">Cantidad</div>
<div className="producto">Producto</div>
<div className="subtotal">Subtotal</div>

<div className="items">{/*comandas.items?.map((e,index)=>{//al ser un array sin indice se le agrega para la key
  return(
<div key={index}>
      <div className='filaItem1'>{e.cantidad}</div>
      <div className='filaItem2'>{e.productoNombre}</div> 
      <div className='filaItem3' >{e.totalParcial} </div>
   </div>
  ) 
})*/}
 <div className='filaItem1'>{productoItem[0].cantidad + productoItem[0].productName + productoItem[0].precio}</div>

</div>

<div className="Mesas-total">Total:{/*comandas.total*/}</div>


<div className="Mesas-mas"><button>Nuevo Item</button></div>
<div className="Mesas-logo"><button type='submit' onClick={(e)=>handleSubmit(e)}>confirmar</button></div>
<div className='Mozo'>Mozo:{user.firstName} </div>
</form>
 </div>
 </div>
  );
}


