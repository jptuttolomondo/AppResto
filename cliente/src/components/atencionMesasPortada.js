import React, { useEffect } from "react";
import { getAllProducts,getAllcategories } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "./card";
import foto from "../assets/denuncia extravio.jpeg";
import portada from "./atencionMesasPortada.module.css";
import {Link} from 'react-router-dom'
import "./solapas.css";
//import "./prueba.css";

export function AtencionMesasPortada() {
  const dispatch = useDispatch();
  const Allproductos = useSelector((state) => state.products);
  const Allcategories=useSelector((state) => state.categories);
  console.log(Allcategories);

  console.log(Allcategories[0]);
 // console.log(ProdFiltered)
let idIndex = 0;
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllcategories());

  }, [dispatch]);

  return (
<div align="center">

<div className={portada.Body}>
  <div className={portada.Encabezado}>Aplicación para restaurantes</div>


  <div class="tabs">
  <div class="tab-container">


  <div id="tab6" class="tab"> 
      <a href="#tab6">{Allcategories[5]}</a>
      <div class="tab-content">
     
       
        
      {   Allproductos.filter(e=>e.categoria === Allcategories[5])
       . map(e=>{
                        return(   
                       <div className={portada.cards} key={e.id}  >
                  
              <Card name={e.productName} description={e.description} image={foto} precio={e.precio} key={e.id} />
         
               </div>  
                
                     )
                     })
                    }
      </div>
    </div>





  <div id="tab5" class="tab"> 
      <a href="#tab5">{Allcategories[4]}</a>
      <div class="tab-content">
     
       
        
      { 
       Allproductos. map(e=>{
                        return(   
                       <div className={portada.cards} key={e.id}  >
                  
              <Card name={e.productName} description={e.description} image={foto} precio={e.precio} key={e.id} />
         
               </div>  
                
                     )
                     })
                    }
      </div>
    </div>



  <div id="tab4" class="tab"> 
      <a href="#tab4">{Allcategories[3]}</a>
      <div class="tab-content">
     
       
        
      { 
                    Allproductos?.
                      map(e=>{
                        return(   
                       <div className={portada.cards} key={e.id}  >
                  
              <Card name={e.productName} description={e.description} image={foto} precio={e.precio} key={e.id} />
         
               </div>  
                
                     )
                     })
                    }
      </div>
    </div>



    <div id="tab3" class="tab"> 
      <a href="#tab3">{Allcategories[2]}</a>
      <div class="tab-content">
     
       
        
      { 
                    Allproductos?.
                      map(e=>{
                        return(   
                       <div className={portada.cards} key={e.id}  >
                  
              <Card name={e.productName} description={e.description} image={foto} precio={e.precio} key={e.id} />
         
               </div>  
                
                     )
                     })
                    }
      </div>
    </div>
    <div id="tab2" class="tab">
      <a href="#tab2">{Allcategories[1]}</a>
      <div class="tab-content">
      { 
                    Allproductos?.
                      map(e=>{
                        return(   
                       <div className={portada.cards} key={e.id}  >
                  
              <Card name={e.productName} description={e.description} image={foto} precio={e.precio} key={e.id} />
         
               </div>  
                
                     )
                     })
                    }
   
      </div>
    </div> 
    <div id="tab1" class="tab">
      <a href="#tab1">{Allcategories[0]}</a>
      <div class="tab-content">
      { //hacer filtros por categoria en redux
                     Allproductos.filter(e=>e.categoria === Allcategories[0]).
                      map(e=>{
                        return(   
                       <div className={portada.cards} key={e.id}  >
                  
              <Card name={e.productName} description={e.description} image={foto} precio={e.precio} key={e.id} />
         
               </div>  
                
                     )
                     })
                    }
      
      </div> 
    </div> 
  </div>
</div>
</div>

<Link to="/mesas"><button className= {portada.botonNuevaComanda}>Nueva Comanda</button></Link>
<button className= {portada.botonNuevoItem}>Agregar Item a la mesa</button>
</div>
  )
}

/*    
{/* --------------------------------------------------------------------*/



/*
       <div className={portada.containerCard}>
{/*Allproductos?.map((e) => {
  return (
    <div className={portada.cards} key={e.id}>
      <Card
        name={e.productName}
        description={e.description}
        image={foto}
        precio={e.precio}
        key={e.id}
      />
    </div>
  );
})*/
//}


