import React, { useContext } from "react";
import context from "../../storage/CartContext";
import "./CartWidget.css";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalItemsInCart } = useContext(context);
  return (
    <div>
      <div className="cartW">
        <Link to="/cart">🛒</Link>
      </div>
      {totalItemsInCart() > 0 ? <small>{totalItemsInCart()}</small> : <></>}
    </div>
  );
}

export default CartWidget;
