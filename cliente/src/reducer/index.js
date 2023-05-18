const initialState={
    products:[],
    categories:[],
    detail:[],
    mesas:[],
    copiaProducts:[],
    user:[],
    item:[{cantidad:[],product:[],price:[]}],
    productoItem:[],
    precioItem:[],
    subtotalItem:[],
    comanda:[],
    cantidadItem:[],
    }
    function rootReducer(state=initialState,action){
    switch(action.type){
     case 'GET_ALL_PRODUCTS':  //console.log(action.payload)
                              return{...state,products:action.payload,copiaproducts:action.payload}
     case 'GET_ALL_CATEGORIES': return{...state,categories:action.payload}
    case 'GET_ALL_MESAS':  return{...state,mesas:action.payload}
    case 'GET_COMANDA_ID':  return{...state,comanda:action.payload}
    case 'GET_USER_BY_NAME': return{...state,user:action.payload}
    case 'INCREMENTAR_CANTIDAD': state.cantidadItem++
                              return{...state}

    case 'ACTUALIZAR_COMANDA':return{...state,comanda:action.payload}
    case 'ACTUALIZAR_PRODUCTO':return{...state,productoItem:action.payload}
    case 'CALCULAR_SUBTOTAL':  return{...state,subtotalItem:Number(state.cantidadItem) *Number(state.precioItem)}
          default:return state 
    }
    
    }
    
    
    export default rootReducer
    