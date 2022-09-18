
import logo from '../assets/undraw_conversation_re_c26v.svg'

import botonMas from'../assets/bxs-plus-circle 1.svg'
import './atencionMesas.css';
import searchBarStyle from './login.module.css';
import {Link} from 'react-router-dom'
export function Login() {
  return (
    <div align="center">
<div className="Mesas-body">
      <div className="Mesas-header">
      <div className="Mesas-titulo">Aplicación para <br></br> Restaurantes/Café</div>
      </div>
  <Link to="/home"><div className="Mesas-atras">Atras</div></Link>    
<div className="Mesas-subtitulo">Usuarios</div>

<div className={searchBarStyle.bloque}>

<div className={searchBarStyle.usuarioTexto}  >Usuario: </div>  

<input className={searchBarStyle.inputLogin}
 type='text'
placeholder='Usuario..'
/>

<div className={searchBarStyle.contraseñatexto}  >Contraseña: </div>  

<input 
className={searchBarStyle.inputPassword} 
type='password'

placeholder='Contraseña...'

/>
<button  className={searchBarStyle.botonLogin} 

type='submit' >Login</button>

</div>



<div ><img className={searchBarStyle.logoGrande}  src={logo} alt=''/></div>
 </div>
 </div>
  );
}
/*onChange={(e)=>handleInputChange(e)}  className={searchBarStyle.inputSearch}
onClick={(e)=>handleSubmit(e)} className={searchBarStyle.buttonSearch}*/