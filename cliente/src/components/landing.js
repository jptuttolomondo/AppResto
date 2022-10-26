//import logo from '../assets/mesa de cafe grande.svg'
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
<div className="landingPage-logo"><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666825686/appresto/mesa_de_cafe_grande_prlqnf.svg" alt=''/></div>
 </div>
 </div>
  );
}


