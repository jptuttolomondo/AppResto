import './home.css';
import {Link}from 'react-router-dom';    
import { LoginUser } from '../actions/index.js';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Login}from './login.js'
export function Home() {
const resultLogin=useSelector((state)=>state.resultLogin)
// useEffect(()=>{


// },[])



  return (
    resultLogin.length===0? <Login/>:
    <div align="center">
<div className="home-body">
      <div className="landing-header">
      <div className="landing-titulo">Aplicación para<br></br> Restaurantes/Café</div>
      </div>
   
<Link to ="/mesas"><div className="landing-atencionMesas">Atención de Mesas</div></Link>
<Link to ="/cocina"><div className="landing-cocina">Cocina</div></Link>
<Link to ="/caja"><div className="landing-caja">Caja</div></Link>
<div className="landing-logo"><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666825686/appresto/mesa_de_cafe_grande_prlqnf.svg" alt=''/></div>
<Link to ="/quit"><div className="landing-salir">Salir</div></Link>
 </div>
 </div>
  );
}
