const initialState={
    products:[],
    categories:[],
    detail:[],
    mesas:[],
    copiaProducts:[],
    user:[],
    comanda:[]
    }
    function rootReducer(state=initialState,action){
    switch(action.type){
     case 'GET_ALL_PRODUCTS':  return{...state,products:action.payload,copiaproducts:action.payload}
     case 'GET_ALL_CATEGORIES': return{...state,categories:action.payload}
    case 'GET_ALL_MESAS':  return{...state,mesas:action.payload}
    case 'GET_COMANDA_ID':  return{...state,comanda:action.payload}
     
          default:return state 
    }
    
    }
    
    
    export default rootReducer
    