import React from "react";
//import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getComandaId } from "../actions";
import cardFormat from "./card.module.css";
export default function Card({ name, description, id, image, precio }) {
  const dispatch = useDispatch();
  const comandas = useSelector((state) => state.comanda);
  useEffect(() => {
    dispatch(getComandaId("a6ae3949-a6fd-404f-9bd3-8ed6e99535b5"));
  }, [dispatch]);
  //aqui se tiene que guardar en tabla la nueva comanda o un put
  function handleSubmit(e) {
    e.preventDefault();
    console.log(comandas)
    if(comandas.items.length=== 0){


    }
    else { 
    let filtro = comandas.items.filter((elem) => elem.productoNombre === name);
    if (filtro.length === 0) {
      let itemAux = {
        cantidad: 1,
        totalParcial: precio,
        productoNombre: name,
        precio: precio,
      };
      comandas.items.push(itemAux);
   
      let arrTotal = comandas.items.map((el) => el.totalParcial);
      comandas.total = arrTotal.reduce((a, b) => a + b);
    } else {
      comandas.items.map((el) => {
        if (el.productoNombre === name) {
          return (
            el.cantidad++,
            (el.totalParcial = el.precio * el.cantidad),
            (el.productoNombre = name)
          ); //hacer un put sobre comanda(id)actualizando cantidad en el item
        }
      });
    }
    let arrTotal = comandas.items?.map((el) => el.totalParcial);
    comandas.total = arrTotal.reduce((a, b) => a + b);
    console.log(comandas)
    return comandas.items;
   }
  }

  return (
    <div className={cardFormat.cards} key={id}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={cardFormat.containerCard} key={id}>
          <div
            key={id}
            className={cardFormat.foodcards}
            title="Agregar a la comanda"
          >
            <div className={cardFormat.cardTitle}>{name}</div>
            <div className={cardFormat.cardData}>{description}</div>
            <div className={cardFormat.cardData}>$ {precio}</div>
            <img
              id={id}
              src={image}
              title="Click para agrandar la foto.."
              alt=""
              width="70px"
              height="50px"
            />
            <button type="submit">
              {" "}
              <img
                className={cardFormat.botonChico}
                src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666823677/appresto/bxs-plus-circle_1_meyxib.png"
                alt=""
                width="20px"
                height="20px"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
