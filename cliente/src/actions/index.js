import axios from 'axios'

export function getAllProducts(){
return async function (dispatch){
    var response= await axios.get('http://localhost:8080/products')
   // console.log('action',response.data.products)
  
       return dispatch({type: 'GET_ALL_PRODUCTS', payload:response.data.products})
}
}
export function getMozo(name){
    return async function (dispatch){
        var response= await axios.get(`http://localhost:8080/users/${name}`)
        //console.log('actions',response.data.payload[0])
                 return dispatch({type: 'GET_USER_BY_NAME', payload:response.data.payload[0]})
    }
    }
export function getAllcategories() {
    return async function (dispatch) {
        var response=await axios.get('http://localhost:8080/categories')
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
            var response=await axios.get(`http://localhost:8080/comanda/${id}`)
        //console.log(response.data)
            return dispatch({type:'GET_COMANDA_ID',payload:response.data})
        }
    }

    export  function  confirmarItem(payload) {
        return async function (dispatch) {
                    var response=await axios.post('http://localhost:8080/item',payload)
                    //console.log(response.data.result)
     // alert(response.data.result)
            return   dispatch({type:'CONFIRMAR_ITEM',payload:response.data.result})
        }
    }


    export function incrementar(payload){
        return  function(dispatch){
             return dispatch({type:'INCREMENTAR_CANTIDAD',payload:payload})
        }
       
    }

    
    export function postComanda(payload){
        return  async function(dispatch){
            var response=await axios.post('http://localhost:8080/comanda',payload)
           // console.log(response.data.payload._id)

            //DESDE ACA HAGO UN POST DE COMANDA VACIO Y DEBER TERORENAR UN ID CON EL CUAL HAGO UN GET Y RETORNO EL GET
             return dispatch({type:'POST_COMANDA',payload:response.data.payload._id})
        }
       
    }

        
    export function actualizarComandaCantidad(){
        return  function(dispatch){
            //DESDE ACA HAGO UN POST DE COMANDA VACIO Y DEBER TERORENAR UN ID CON EL CUAL HAGO UN GET Y RETORNO EL GET
             return dispatch({type:'ACTUALIZAR_COMANDA_CANTIDAD'})
        }
       
    }

          
    export function actualizarProducto(payload){
        return  function(dispatch){
            //DESDE ACA HAGO UN POST DE COMANDA VACIO Y DEBER TERORENAR UN ID CON EL CUAL HAGO UN GET Y RETORNO EL GET
             return dispatch({type:'ACTUALIZAR_PRODUCTO',payload:payload})
        }
       
    }

              
    export function  calcularSubtotal(){
        return  function(dispatch){
            //DESDE ACA HAGO UN POST DE COMANDA VACIO Y DEBER TERORENAR UN ID CON EL CUAL HAGO UN GET Y RETORNO EL GET
             return dispatch({type:'CALCULAR_SUBTOTAL'})
        }
       
    }

    export function  actualizarItem(payload){
        return  function(dispatch){
            //DESDE ACA HAGO UN POST DE COMANDA VACIO Y DEBER TERORENAR UN ID CON EL CUAL HAGO UN GET Y RETORNO EL GET
             return dispatch({type:'ACTUALIZAR_ITEM',payload:payload})
        }
       
    }

    export function  actualizarComandaMesa(payload){
        return  function(dispatch){
            //DESDE ACA HAGO UN POST DE COMANDA VACIO Y DEBER TERORENAR UN ID CON EL CUAL HAGO UN GET Y RETORNO EL GET
             return dispatch({type:'ACTUALIZAR_COMANDA_MESA',payload:payload})
        }
       
    }

    export function actualizarComandaItemProducto(payload){
        return  function(dispatch){
            //DESDE ACA HAGO UN POST DE COMANDA VACIO Y DEBER TERORENAR UN ID CON EL CUAL HAGO UN GET Y RETORNO EL GET
             return dispatch({type:'ACTUALIZAR_COMANDA_ITEM_PRODUCTO',payload:payload})
        }
       
    }

    export function  calcularTotal(){
        return  function(dispatch){
                        return dispatch({type:'CALCULAR_TOTAL'})
        }
       
    }

    
    export function  clearMessages(){
        return  function(dispatch){
                        return dispatch({type:'CLEAR_MESSAGES',payload:[]})
        }
       
    }

    
    
    export function  actualizarItemsTotal(payload){
        return  function(dispatch){
                        return dispatch({type:'ACTUALIZAR_ITEM_TOTAL',payload:payload})
        }
       
    }

      
    export function  actualizarComanda(payload,idComanda){
        return  function(dispatch){
            payload={...payload,idComanda:idComanda}
           // console.log('en action',payload)
                        return dispatch({type:'ACTUALIZAR_COMANDA',payload:payload})
        }
       
    }

    
    export function  postCreateUser(payload){
        return  async function(dispatch){
          var response=await axios.post('http://localhost:8080/user',payload)
          
         // if(response.status===200)alert('Usuario Creado correctamente')
          //else alert ('Error en la creacion de usuario')

                        return dispatch({type:'CREAR_USUARIO',payload:response.status})
        }
       
    }



    export function LoginUser(payload){
        return async function(dispatch){
var respuesta=await axios.post('http://localhost:8080/login',payload)
console.log('response',respuesta)
if(respuesta.status===200) { alert('Usuario Logueado')
                            return dispatch ({type:'LOGIN',payload:respuesta.status})
                            }
else alert(respuesta.data.error)

return dispatch ({type:'LOGIN',payload:[]})
        }
    }
    


    export function Logout(payload){
        return async function(dispatch){
var response=await axios.get('http://localhost:8080/logout',payload)
console.log('stutus de logout',response.status)
return dispatch ({type:'LOGOUT',payload:[]})
        }
    }
    