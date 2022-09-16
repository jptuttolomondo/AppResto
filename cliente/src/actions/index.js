import axios from 'axios'

export function getAllProducts(){
return async function (dispatch){
    var response= await axios.get('http://localhost:3001/products')
       return dispatch({type: 'GET_ALL_PRODUCTS', payload:response.data})
}
}

