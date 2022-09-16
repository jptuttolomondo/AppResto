const initialState={
    products:[],
    detail:[],
    copiaProducts:[],
    user:[],
    comanda:[]
    }
    function rootReducer(state=initialState,action){
    switch(action.type){
     case 'GET_ALL_PRODUCTS':  return{...state,products:action.payload,copiaproducts:action.payload}
          default:return state 
    }
    }
    
    
    export default rootReducer
    