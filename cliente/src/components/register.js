import { useState } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import {postCreateUser}from'./../actions/index.js'
import './atencionMesas.css';
import stylesRegister from'./register.module.css'

export function Register() {
const dispatch=useDispatch()
const   resultCreateUser=useSelector((state)=>state.resultCreateUser)
const [errors,setErrors]=useState({})
const [input,setInput]=useState({
    firstName:'',
    lastName:'',
    dni:'',
    address:'',
    username:'',
    password:'',
    role:'USER',
    inputDate:'',
    payDay:'',
})



function validate(input) {
    let errors = {}
    if (!input.firstName) {
        errors.firstName = "Nombre Valido"
    }
    else{if(! (/^[A-Z]/.test(input.firstName))) errors.firstName="Comenzar con mayúscula"
         else if(! (/^[A-Z][a-z]+$/.test(input.firstName))) errors.firstName="Continuar con minúsculas, sin espacios"
               
            }
if (!input.lastName) {
                errors.lastName = "Apellido Valido"
            }
            else {if(! (/^[A-Z]/.test(input.lastName))) errors.lastName="Comenzar con mayúscula"
                 else  if(! (/^[A-Z][a-z]+$/.test(input.lastName))) errors.lastName="Continuar con minúsculas, sin espacios"
            }

if(!input.username) errors.username="Usuario valido"
else { if(!(/^[a-z]/.test(input.username))) errors.username="Comenzar con minúsculas"
     else if(!(/^([a-z]||[0-9])+$/.test(input.username))) errors.username="Solo minúsculas y/o números"
        }
             
if(!input.password) errors.password="Contraseña válida"
else { if(!(/^.{6,}/.test(input.password))) errors.password="Al menos 6 caracteres"

}

if(!input.address) errors.address="Direccion válida"
else { if(!(/^[A-Za-z]+\s\d+$/.test(input.address))) errors.address="Calle y numero"

}

    if (!input.inputDate) {
        errors.inputDate = "Completar fecha"
                        } 
    else {let fecha=new Date()
        console.log(fecha)
        console.log(input.inputDate)
        if(input.inputDate>fecha.toLocaleDateString()) errors.inputDate="Ingrese fecha anterior"
    }   

if (!input.dni) {
                      errors.dni = "DNI Válido"
                        }
                        else{
                            if(!(/^\d{8}$/.test(input.dni)))
                            errors.dni = "DNI inválido"
                        }

if(!input.payDay)errors.payDay="Dia de pago valido"
else{
    if(!(/^(?:[1-9]|1\d|2[0-8])$/.test(input.payDay)))errors.payDay="De día 1 a 28"
}



    return errors
}


function handleChange(e){
    setErrors(validate({...input,[e.target.name]:e.target.value}))
    setInput({...input,[e.target.name]:e.target.value})
    }
    

  async  function  handleSubmit(e){
       
            if (input.username === ""||input.password==='') {
                e.preventDefault()
                alert("Completar correctamente el formulario")
            } else {
            e.preventDefault()
        dispatch(postCreateUser(input))
        resultCreateUser===200?  alert('Usuario Creado correctamente'): alert('Error.Intente Nuevamente')
       
               
                
            
         
        
          
            setInput({
                firstName:'',
                lastName:'',
                dni:'',
                address:'',
                username:'',
                password:'',
                role:'USER',
                inputDate:'',
                payDay:'',
            })
        }
        
    }





  return (
    <div align="center">
<div className="Mesas-body">
      <div className="Mesas-header">
      <div className="Mesas-titulo">Aplicación para <br></br> Restaurantes/Café</div>
      </div>
  <Link to="/login"><div className={stylesRegister.botonVolver}>Atras</div></Link>    
<div className={stylesRegister.subtitulo1}>Registro de Usuarios</div>
<div className={stylesRegister.bloque}>
<form onSubmit={(e)=>handleSubmit(e)} >

<div>
<label className={stylesRegister.nombreTexto}>Nombre: </label>  
<input className={stylesRegister.inputNombre}
 type='text'
placeholder='Nombre..'
value={input.firstName} 
name="firstName"
onChange={handleChange}
/>
{ errors.firstName && (<p className={stylesRegister.createValidFirstName}> {errors.firstName} </p> )}
</div>

<div>
<label className={stylesRegister.apellidoTexto}>Apellido: </label>  
<input className={stylesRegister.inputApellido}
 type='text'
placeholder='Apellido..'
value={input.lastName} 
name="lastName"
onChange={handleChange}
/>
{ errors.lastName && (<p className={stylesRegister.createValidLastName}> {errors.lastName} </p> )}
</div>
<div>
<label className={stylesRegister.dniTexto}  >DNI: </label>  
<input className={stylesRegister.inputDni}
 type='number'
placeholder='DNI..'
value={input.dni} 
name="dni"
onChange={handleChange}
/>
{ errors.dni && (<p className={stylesRegister.createValidDni}> {errors.dni } </p> )}
</div>
<div>
<label className={stylesRegister.direccionTexto}  >Direccion: </label>  
<input className={stylesRegister.inputDireccion}
 type='text'
placeholder='Direccion..'
value={input.address} 
name="address"
onChange={handleChange}
/>
{ errors.address && (<p className={stylesRegister.createValidDireccion}> {errors.address } </p> )}
</div>
<div>
<label className={stylesRegister.usuarioTexto}  >Usuario: </label>  
<input className={stylesRegister.inputUsuario}
 type='text'
placeholder='usuario..'
value={input.username} 
name="username"
onChange={handleChange}
/>

{ errors.username && (<p className={stylesRegister.createValidUsername}> {errors.username } </p> )}
</div>

<div>
<label className={stylesRegister.contraseñaTexto}  >Contraseña: </label>  
<input 
className={stylesRegister.inputContraseña} 
type='password'
placeholder='Contraseña...'
value={input.password} 
name="password"
onChange={handleChange}
/>

{ errors.password && (<p className={stylesRegister.createValidPassword}> {errors.password } </p> )}
</div>

<div>
<label className={stylesRegister.FechaIngresoTexto}  >Fecha Ingreso: </label> 
<input className={stylesRegister.inputFechaIngreso}
 type='date'
placeholder='fecha Ingreso..'
value={input.inputDate} 
name="inputDate"
onChange={handleChange}
/>

{ errors.inputDate&& (<p className={stylesRegister.createValidFechaIngreso}> {errors.inputDate } </p> )}
</div>

<div>
<label className={stylesRegister.DiaPagoTexto}  >Dia de pago: </label> 
<input className={stylesRegister.inputDiaPago}
 type='number'
placeholder='dia..'
value={input.payDay} 
name="payDay"
onChange={handleChange}
/>
{ errors.payDay&& (<p className={stylesRegister.createValidDiaPago}> {errors.payDay } </p> )}
</div>



<div className={stylesRegister.botonRegister}
onClick={(e)=>handleSubmit(e)}
>
Crear Usuario</div>
</form>
</div>



 </div>
 </div>
  );
}