import {useEffect,useState } from 'react';
import{ getAllMesas,getMozo,getAllProducts,incrementar,postComanda,
  actualizarComandaCantidad,actualizarProducto,calcularSubtotal,actualizarComandaMesa,
calcularTotal,
confirmarItem, clearMessages,actualizarItemsTotal,actualizarComanda,
getComandaId} from '../actions'
import { useDispatch, useSelector } from "react-redux";
import './atencionMesas.css';
import {Link} from 'react-router-dom'

export function AtencionMesas() {



  let fecha =new Date()
   const dispatch= useDispatch()
  const user=useSelector((state)=>state.user)
  const messages=useSelector((state)=>state.message)
  const idComanda=useSelector((state)=>state.idComanda)
  console.log('idcomanda',idComanda)
  const itemArrayPrueba=useSelector((state)=>state.itemsTotal)
  //console.log('itemArrayPrueba',itemArrayPrueba)
  //console.log('IDCOMANDA',idComanda)
//  if(messages!==''){alert(messages)
//                   dispatch(clearMessages())
//                 } 
  useEffect(()=>{
    dispatch(getAllMesas())
    dispatch(getAllProducts())
    dispatch(getMozo("6456e2af771cf3af7ab16cd1"))
    
    },[dispatch])


    // const [comandaNueva,setComandaNueva]=useState({
    //   date:'',
    //   mesa:'',
    //   estado: '',
    //   mozo:'',
    //   total:0,
    //   items: [
    //     {
    //       cantidad:0,
    //       producto: '',
    //       precio:0,
    //       subtotalItem:0
    //     },
       
    //   ]
    // })



const comanda=useSelector((state) => state.comanda)
console.log('comanda front',comanda)
const mesas= useSelector((state)=>state.mesas)
const MesaComanda=useSelector((state)=>state.MesaComanda)
const cantidad= useSelector((state)=>state.cantidadItem)
//const item=useSelector((state)=>state.item)
const total=useSelector((state)=>state.total)
 const subtotalItem=useSelector((state) => state.subtotalItem)
const productos=useSelector((state)=>state.products)
const [productItem,setProductItem]=useState('')
//console.log(itemArrayPrueba)

function handleCantidad(e){
  e.preventDefault()
  dispatch(incrementar(cantidad))
  
dispatch(calcularSubtotal())
dispatch(calcularTotal())
dispatch(actualizarComandaCantidad())
}


function handleProduct(e){

let productoItem=productos.filter(el=>(el.productName===e.target.value))
setProductItem(productoItem)
//    setComandaNueva({...comandaNueva,items:[...comandaNueva.items,
//     {cantidad:cantidad,producto:productoItem[0].productName,precio:productoItem[0].precio,subtotal:subtotalItem},
//     ], total:total
// })
 //  console.log('comandaNueva',comandaNueva)

  dispatch(actualizarProducto(productoItem))

}

  function handleMesas(e) {

   // setComandaNueva({ ...comandaNueva, mesa: MesaComanda,mozo:user.firstName })

    dispatch(actualizarComandaMesa(e.target.value))
  }



function handleSubmit(e){
//   if (comandaNueva.items.length ===0) {
//       e.preventDefault()
//       alert("No hay productos cargados")
//   } else {
//   e.preventDefault()

//   dispatch(postComanda(comandaNueva))
//   alert('comanda creada..')
//   setComandaNueva({
//     date:'',
//     mesa:'',
//     estado: '',
//     mozo:'',
//     total:0,
//     items: [
//       {
//         cantidad:0,
//         producto: '',
//         subtotalItem:0
//       },
     
//     ]
//   }
     
//   )

// }

}


function handleConfirmItem(e){
  e.preventDefault()
dispatch(postComanda(comandaFinal))
 dispatch( confirmarItem(comandaFinal.items))
 
//  console.log('ITEMS ANTES',comandaFinal.items)
//  console.log('comandafinal antes',comanda)
 dispatch(actualizarComanda(comandaFinal,idComanda))

 //dispatch(actualizarItemsTotal(comandaFinal.items))


 //dispatch(getComandaId(idComanda))
}

function handleNewItem(e){
  e.preventDefault()




}


let comandaFinal={

  date:fecha,
  mesa:MesaComanda? MesaComanda :'',
  estado:'PENDIENTE',
  mozo:user._id,
  total: total? total : 0,
  items: 
  [
    {
      cantidad:cantidad? cantidad :0,
      producto: productItem? productItem[0]._id :'', 
      subtotalItem:subtotalItem? subtotalItem :0
    },
   
  ]
}
console.log('comanda con id',comanda)


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
<div><button className="Mesas-boton-cantidad" onClick={(e)=>handleCantidad(e)}>+</button>
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
{/*console.log('comanda',comanda)*/}
<div className="items">{/*comandaFinal.items?.map((e,index)=>{//al ser un array sin indice se le agrega para la key
  return(
<div key={index}>
      <div className='filaItem1'>{e.cantidad}</div>
      <div className='filaItem2'>{e.productItem?.productName}</div> 
      <div className='filaItem3' >{e.subtotalItem} </div>
   </div>
  ) 
})*/}

  <div className='filaItem1' >{cantidad}</div>
      <div className='filaItem2'>{productItem[0]?.productName}</div> 
      <div className='filaItem3' >{subtotalItem} </div>



</div>
<div className="Mesas-total">Total:{total}</div>


<div className="Mesas-mas"><button onClick={(e)=>handleConfirmItem(e)}>Confirmar Item</button></div>
<div className="Mesas-nuevoItem"><button onClick={(e)=>handleNewItem(e)}>Nuevo Item</button></div>
<div className="Mesas-logo"><button type='submit' onClick={(e)=>handleSubmit(e)}>confirmar</button></div>
<div className='Mozo'>Mozo:{user.firstName} </div>
</form>
 </div>
 </div>
  );
}


