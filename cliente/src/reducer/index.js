const initialState = {
  products: [],
  categories: [],
  detail: [],
  mesas: [],
  copiaProducts: [],
  user: [],
  productoItem: [],
  precioItem: [],
  cantidadItem: [],
  subtotalItem: [],
  total: [0],
  comanda: [],
  MesaComanda: [],
  item: [],
  itemsTotal:[],
  message:[],
  idComanda:[],
  resultCreateUser:[],
  resultLogin:[]

};
function rootReducer(state = initialState, action) {
  switch (action.type) {

    case "GET_ALL_PRODUCTS": //console.log(action.payload)
      return { ...state, products: action.payload, copiaproducts: action.payload, };
    case "GET_ALL_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_ALL_MESAS":
      return { ...state, mesas: action.payload };
    case "GET_COMANDA_ID":
      return { ...state, comanda: action.payload };
    case "GET_USER_BY_NAME":
      return { ...state, user: action.payload };
    case "INCREMENTAR_CANTIDAD":
      state.cantidadItem++
      return {
        ...state, cantidad: action.cantidadItem, producto: state.productoItem,
        subtotal: state.subtotalItem
      };

    case "ACTUALIZAR_COMANDA_CANTIDAD":

     

      return {...state,cantidadItem:state.cantidadItem};

    //return{...state,comanda:action.payload}

    case "ACTUALIZAR_COMANDA_MESA": return { ...state, MesaComanda: action.payload }

    case "ACTUALIZAR_COMANDA_ITEM_PRODUCTO":
      return {
        ...state,
        comanda: {
          ...state.comanda,
          comanda: { item: { product: action.payload } },
        },
      };
    case "ACTUALIZAR_PRODUCTO":

      state.precioItem = action.payload[0].precio
      return { ...state, productoItem: action.payload, precioItem: action.payload[0].precio };
    case "CALCULAR_SUBTOTAL":

      state.subtotalItem = Number(state.cantidadItem) * Number(state.precioItem)
      return { ...state, subtotal: state.subtotalItem };

    case "ACTUALIZAR_ITEM":
      return {
        ...state,
        item: [
          {
            cantidad: action.payload.cantidad,
            product: action.payload.product,
            price: action.payload.precio,
          },
        ],
      };

    case 'CALCULAR_TOTAL': return { ...state, total: Number(state.subtotalItem) }
case 'CONFIRMAR_ITEM'://console.log('reducer',action.payload)
                  return{...state,message:action.payload}
case 'POST_COMANDA': //console.log(action.payload)
                    //state.idComanda=action.payload
                    return{...state,idComanda:action.payload}
case 'CLEAR_MESSAGES':return{...state,message:action.payload}
case 'ACTUALIZAR_ITEM_TOTAL':  return{...state,itemsTotal:{...state.itemsTotal,itemTotal:action.payload}}

case 'ACTUALIZAR_COMANDA':
                state.comanda=action.payload
                //console.log('en reducr',state.comanda)
                return{...state,comanda:action.payload}
case 'CREAR_USUARIO': return{state,resultCreateUser:action.payload}
case 'LOGIN':state.resultLogin=action.payload
   return{state,resultLogin:action.payload}
   
case 'LOGOUT': return {state, resultLogin:action.payload}
 default: return state



  }
}

export default rootReducer;
