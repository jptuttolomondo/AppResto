import { Provider } from 'react-redux';

import {Route,Routes} from 'react-router-dom'
import {Landing} from'./components/landing.js'
import { Home } from "./components/home.js";
import {AtencionMesasPortada} from './components/atencionMesasPortada.js'
import {Cocina} from './components/cocina.js';
import './App.css';


import {store}from'./store/index'

function App() {
  return (      
   <div >
        <Provider store= {store}>
         <Routes>
                <Route  path="/" element={<Landing/>} > </Route>
                <Route  path="/mesas" element={<AtencionMesasPortada/>} > </Route>
                <Route exact path="/home" element={<Home/>} > </Route>
                <Route exact path="/cocina" element={<Cocina/>} > </Route>
                
      </Routes>
    </Provider>
     </div>    
     );
} 
export default App;
 
//
/* <Route exact path="/home" element={<Home/>} > </Route>*/