
import logo from '../assets/undraw_conversation_re_c26v 1.png'
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
<div className="Mesas-subtitulo">Login</div>

<div className={searchBarStyle.bloque}>
    

<input type='text'
placeholder='Nombre de Usuario...'
/>
<input type='text'
placeholder='Contraseña...'
/>
<button type='submit' >Buscar</button>

</div>


<Link to ="/mesasPortada"><div className="Mesas-mas"><img src={botonMas} alt=''/></div></Link>
<div className="Mesas-logo"><img src={logo} alt=''/></div>
 </div>
 </div>
  );
}
/*onChange={(e)=>handleInputChange(e)}  className={searchBarStyle.inputSearch}
onClick={(e)=>handleSubmit(e)} className={searchBarStyle.buttonSearch}*/