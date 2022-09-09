import logo from '../assets/mesa de cafe grande.svg'
import {Link} from 'react-router-dom'
//import botonMas from'../assets/bxs-plus-circle 1.svg'
import './landing.css';

export function Landing() {
  return (
    <div align="center">
<div className="landingPage-body">
      <div className="landingPage-header">
      <div className="landingPage-titulo">Aplicación para<br></br> Restaurantes/Café</div>
      </div>
<Link to ="/home"><div className="landingPage-ingreso">Ingresar</div></Link>
<div className="landingPage-empresa">El cafecito</div>
<div className="landingPage-logo"><img src={logo} /></div>
 </div>
 </div>
  );
}


