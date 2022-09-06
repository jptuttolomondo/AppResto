import { Provider } from 'react-redux';

import {Route,Routes} from 'react-router-dom'
import {Landing} from'./components/landing.js'
import { Home } from "./components/home.js";
import AtencionMesas from './components/atencionMesas.js'
//import {Home} from './components/home';
import './App.css';


import {store}from'./store/index'

function App() {
  return (      
   <div >
        <Provider store= {store}>
         <Routes>
                <Route  path="/" element={<Landing/>} > </Route>
                <Route  path="/mesas" element={<AtencionMesas/>} > </Route>
                <Route exact path="/home" element={<Home/>} > </Route>
                
      </Routes>
    </Provider>
     </div>    
     );
} 
export default App;
 
//
/* <Route exact path="/home" element={<Home/>} > </Route>*/