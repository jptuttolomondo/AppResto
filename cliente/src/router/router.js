import * as React from "react";
import {Route,Routes,BrowserRouter } from "react-router-dom";
import { Landing} from "../components/landing.js";
import { AtencionMesas } from "../components/atencionMesas.js";
import { Home } from "../components/home.js";


/*esto esta al pédo*/
    
export const AppRouter=()=>{
        return(
<BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Landing/>} > </Route>
                <Route exact path="/home" element={<Home/>} > </Route>
                <Route exact path="/mesas" element={<AtencionMesas/>} > </Route>
                </Routes>
</BrowserRouter>
        )
}
/*       <Route exact path="/home" element={<Home/>} > </Route>*/