import axios from 'axios'

export function getAllProducts(){
return async function (dispatch){
    var response= await axios.get('http://localhost:8080/products')
    console.log('action',response.data.products)
  
       return dispatch({type: 'GET_ALL_PRODUCTS', payload:response.data.products})
}
}
export function getMozo(name){
    return async function (dispatch){
        var response= await axios.get(`http://localhost:8080/users/${name}`)
       // console.log('actions',response.data.payload[0])
                 return dispatch({type: 'GET_USER_BY_NAME', payload:response.data.payload[0]})
    }
    }
export function getAllcategories() {
    return async function (dispatch) {
        var response=await axios.get('http://localhost:3001/categories')
        return dispatch({type: 'GET_ALL_CATEGORIES',payload: response.data})
    }
}
    export function getAllMesas() {
        return async function (dispatch) {
            var response=await axios.get('http://localhost:8080/mesas')
            //console.log('action mesas',response.data.payload)
            return dispatch({type: 'GET_ALL_MESAS',payload: response.data.payload})
        }
        
    }
    
    export function getComandaId(id) {
        return async function (dispatch) {
            var response=await axios.get(`http://localhost:3001/comanda/${id}`)
            ///console.log(response.data)
            return dispatch({type: 'GET_COMANDA_ID',payload: response.data})
        }
    }

    export function incrementar(payload){
        return  function(dispatch){
             return dispatch({type:'INCREMENTAR_CANTIDAD',payload:payload})
        }
       
    }
