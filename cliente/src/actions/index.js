import axios from 'axios'

export function getAllVideogames(){
return async function (dispatch){
    var response= await axios.get('http://localhost:3001/videogames')
       return dispatch({type: 'GET_ALL_VIDEOGAMES', payload:response.data})
}
}

