import React, { useEffect } from 'react'
/*//import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//import Card from './card'
import { getMoviesRecommended, filterByStar, cleanStates } from '../redux/actions'
import SearchBar from './searchBar'
import homeStyles from './home.module.css'

*/
import logo from '../assets/mesa de cafe grande.svg'
import foto from '../assets/denuncia extravio.jpeg'

//import botonMas from'../assets/bxs-plus-circle 1.svg'
import portada from './atencionMesasPortada.module.css'; 
import './prueba.css'
import {Link}from 'react-router-dom';    
export function AtencionMesasPortada() {
  return (
    <div align="center">
      
<div className={portada.Body}>
<div className={portada.Encabezado}>Aplicación para restaurantes</div>
<div className={portada.containerCard}>foto<br></br><img src={foto} width= "117px" height = "127 px" left=" 40px" top="217px" alt="Foto" /></div>


 
 </div>
 </div>
  );
}

