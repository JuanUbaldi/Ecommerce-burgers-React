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
        <p>{product.description}</p>
        <img src={product.imgBurger} alt="hamburguesa" />
        <h4>{product.price}</h4>
        <Link to={urlDetail}>
          <Button>IR AL DETALLE</Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
