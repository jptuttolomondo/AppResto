import * as React from "react";
import {Route,Routes,BrowserRouter } from "react-router-dom";
import { Landing} from "../components/landing.js";

import { Home } from "../components/home/home";
import Detail from "../components/cards/detail";


    
export const AppRouter=()=>{
        return(
<BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Landing/>} > </Route>
         
             
                </Routes>
</BrowserRouter>
        )
}
/*       <Route exact path="/home" element={<Home/>} > </Route>*/