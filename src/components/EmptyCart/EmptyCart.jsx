import React from "react";
import "./emptyCart.css";
function EmptyCart() {
  return (
    <div className="emptyCart">
      <h2 className="h2">Carrito vacio</h2>
      <img className="imgEmptyCart" src="/img/emptyCart.jpg" alt="empty cart" />
    </div>
  );
}

export default EmptyCart;
