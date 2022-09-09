import logo from '../assets/mesa de cafe grande.svg'
//import botonMas from'../assets/bxs-plus-circle 1.svg'
import './home.css';
import {Link}from 'react-router-dom';    
export function Home() {
  return (
    <div align="center">
<div className="home-body">
      <div className="landing-header">
      <div className="landing-titulo">Aplicación para<br></br> Restaurantes/Café</div>
      </div>
<div className="landing-login">Login</div>
<Link to ="/mesas"><div className="landing-atencionMesas">Atención de Mesas</div></Link>
<div className="landing-cocina">Cocina</div>
<div className="landing-caja">Caja</div>
<div className="landing-salir">Salir</div>
<div className="landing-logo"><img src={logo} /></div>
 </div>
 </div>
  );
}
