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
      <Link to ="/login"><div className="landing-login">Login</div></Link>
<Link to ="/mesasPortada"><div className="landing-atencionMesas">Atención de Mesas</div></Link>
<Link to ="/cocina"><div className="landing-cocina">Cocina</div></Link>
<Link to ="/caja"><div className="landing-caja">Caja</div></Link>
<div className="landing-logo"><img src={logo} /></div>
<Link to ="/quit"><div className="landing-salir">Salir</div></Link>
 </div>
 </div>
  );
}
