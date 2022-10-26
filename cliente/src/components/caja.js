import './atencionMesas.css';
import {Link} from 'react-router-dom'
export function Caja() {
  return (
    <div align="center">
<div className="Mesas-body">
      <div className="Mesas-header">
      <div className="Mesas-titulo">Aplicación para <br></br> Restaurantes/Café</div>
      </div>
  <Link to="/home"><div className="Mesas-atras">Atras</div></Link>    
<div className="Mesas-subtitulo">Atención de mesas</div>
<div className="Mesas-tablaItems"></div>
<div className="Mesas-fecha">Fecha:</div>
<div className="Mesas-hora">Hora:</div>
<div className="Mesas-mesa">Mesa:</div>
<div className="Mesas-total">Total:</div>
<div className="Mesas-agregarPedido">Nuevo Item</div>
<div className="Mesas-nuevaMesa">Nueva Mesa</div>
<Link to ="/mesasPortada"><div className="Mesas-mas"><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666824874/appresto/bxs-plus-circle_1_edfipo.svg" alt='' /></div></Link>
<div className="Mesas-logo"><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666824693/appresto/undraw_conversation_re_c26v_1_qbzozn.png" alt=''/></div>
 </div>
 </div>
  );
}
