import axios from 'axios'

export function getAllProducts(){
return async function (dispatch){
    var response= await axios.get('http://localhost:3001/products')
       return dispatch({type: 'GET_ALL_PRODUCTS', payload:response.data})
}
}
export function getMozo(name){
    return async function (dispatch){
        var response= await axios.get(`http://localhost:3001/users/${name}`)
                 return dispatch({type: 'GET_USER_BY_NAME', payload:response.data})
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
            var response=await axios.get('http://localhost:3001/mesas')
            return dispatch({type: 'GET_ALL_MESAS',payload: response.data})
        }
        
    }
    
    export function getComandaId(id) {
        return async function (dispatch) {
            var response=await axios.get(`http://localhost:3001/comandas/${id}`)
            ///console.log(response.data)
            return dispatch({type: 'GET_COMANDA_ID',payload: response.data})
        }
    }
