import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import Button from "../Button";

function Item({ product }) {
  let urlDetail = `/detalle/${product.id}`;
  return (
    <div className="card">
      <h2>{product.title}</h2>

      <img className="card-img" src={product.imgFlag} alt="bandera" />

      <div className="card-detail">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <img src={product.imgBurger} alt="hamburguesa" />
        <h4>{product.price}</h4>
      </div>
      <div className="buttonItem">
        <Link to={urlDetail}>
          <Button color="black" colorLetter="yellow" colorBorder="yellow">
            IR AL DETALLE
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
