import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Checkout.css";
function Checkout() {
  return (
    <div className="checkout">
      <h1>Gracias por su compra!!</h1>
      <img className="imgCheckout" src="/img/finishburger.webp" alt="" />
      <div className="buttonCheckout">
        <Link to="/">
          <Button color="black" colorLetter="yellow" colorBorder="yellow">
            Volver al catalogo
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
