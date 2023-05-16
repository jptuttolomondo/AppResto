import React, { useEffect } from "react";
import { getAllProducts,getAllcategories } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "./card";
import portada from "./atencionMesasPortada.module.css";
import {Link} from 'react-router-dom'
import "./solapas.css";


export function AtencionMesasPortada() {
  const dispatch = useDispatch();
  const Allproductos = useSelector((state) => state.products);
  const Allcategories=useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllcategories());

  }, [dispatch]);

  return (
<div align="center">

<div className={portada.Body}>
  <div className={portada.Encabezado}>Aplicación para restaurantes</div>

  <div className="tabs">
  <div className="tab-container">


  <div id="tab6" className="tab"> 
      <a href="#tab6">{Allcategories[5]}</a>
      <div className="tab-content">
     
       
        
      {   /*Allproductos.filter(e=>e.categoria === Allcategories[5])
       .map(e=>{
                        return(   
                       <div className={portada.cards} key={e.id}  >
                  
              <Card name={e.productName} description={e.description} image={e.image} precio={e.precio} key={e.id} />
         
               </div>  
                
                     )
                     })
                    */ }
      </div>
    </div>





  <div id="tab5" className="tab"> 
      <a href="#tab5">{Allcategories[4]}</a>
      <div className="tab-content">
     
       
        
      { 
       Allproductos.map(e=>{
                        return(   
                       <div className={portada.cards} key={e.id}  >
                  
              <Card name={e.productName} description={e.description} image={e.image} precio={e.precio} key={e.id} />
         
               </div>  
                
                     )
                     })
                    }
      </div>
    </div>



  <div id="tab4" className="tab"> 
      <a href="#tab4">{Allcategories[3]}</a>
      <div className="tab-content">
     
       
        
      { 
                    Allproductos?.map(e=>{
                        return(   
                       <div className={portada.cards} key={e.id}  >
                  
              <Card name={e.productName} description={e.description} image={e.image} precio={e.precio} key={e.id} />
         
               </div>  
                
                     )
                     })
                    }
      </div>
    </div>



    <div id="tab3" className="tab"> 
      <a href="#tab3">{Allcategories[2]}</a>
      <div className="tab-content">
     
       
        
      { 
                    Allproductos?.map(e=>{
                        return(   
                       <div className={portada.cards} key={e.id}  >
                  
              <Card name={e.productName} description={e.description} image={e.image} precio={e.precio} key={e.id} />
         
               </div>  
                
                     )
                     })
                    }
      </div>
    </div>
    <div id="tab2" className="tab">
      <a href="#tab2">{Allcategories[1]}</a>
      <div className="tab-content">
      { 
                    Allproductos?.map(e=>{
                        return(   
                       <div className={portada.cards} key={e.id}  >
                  
              <Card name={e.productName} description={e.description} image={e.image} precio={e.precio} key={e.id} />
         
               </div>  
                
                     )
                     })
                    }
   
      </div>
    </div> 
    <div id="tab1" className="tab">
      <a href="#tab1">{Allcategories[0]}</a>
      <div className="tab-content">
      { //hacer filtros por categoria en redux
           Allproductos.filter(e=>e.categoria === Allcategories[0]).map(e=>{
                        return(   
                          
                       <div className={portada.cards} key={e.id}  >
          
              <Card name={e.productName} description={e.description} id={e.id} image={e.image} precio={e.precio} key={e.id} />
         
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
<button className= {portada.botonNuevoItem}>Agregar Item a la Comanda: </button>
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


