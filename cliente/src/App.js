import logo from './assets/undraw_conversation_re_c26v 1.png'
import botonMas from'./assets/bxs-plus-circle 1.svg'
import './App.css';

function App() {
  return (
    <div align="center">
<div className="App-body">
      <div className="App-header">
      <div className="App-titulo">Aplicación para <br></br> Restaurantes/Café</div>
      </div>
<div className="App-subtitulo">Atención de mesas</div>
<div className="App-tablaItems"></div>
<div className="App-fecha">Fecha:</div>
<div className="App-mesa">Mesa:</div>
<div className="App-total">Total:</div>
<div className="App-agregarPedido">Nuevo Item</div>
<div className="App-nuevaMesa">Nueva Mesa</div>
<div className="App-mas"><img src={botonMas} /></div>
<div className="App-logo"><img src={logo} /></div>
 </div>
 </div>
  );
}

export default App;
