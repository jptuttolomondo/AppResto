const initialState={
    videogames:[],
    detail:[],
    copiaVideogames:[],
    genres:[],
    platforms:[]
    }
    function rootReducer(state=initialState,action){
    switch(action.type){
     case 'GET_ALL_VIDEOGAMES':  return{...state,videogames:action.payload,copiaVideogames:action.payload}
    
      default:return state 
    }
    }
    
    
    export default rootReducer
    