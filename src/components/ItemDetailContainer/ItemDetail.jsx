import React, { useState, useContext } from "react";
import ClickCounter from "../ClickCounter/ClickCounter";
import "./ItemDetail.css";
import Button from "../Button";
import context from "../../storage/CartContext";
import { Link } from "react-router-dom";
function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);
  const { cart, addToCart } = useContext(context);
  let itemInCart = cart.find((item) => product.id === item.id);
  let stock = product.stock;
  if (itemInCart) stock -= itemInCart.amount;
  function onAddToCart(amount) {
    const itemsForCart = {
      ...product,
      amount,
    };
    addToCart(itemsForCart);
    setIsInCart(true);
  }
  return (
    <div className="detail">
      <img  className="flagDetail" src={product.imgFlag} alt="" />
      <h2>El producto elegido es: {product.name}</h2>
      <img src={product.imgBurger} alt="" />
      <h4>{product.price}</h4>
      {isInCart ? (
        <>
          {" "}
          <div className="irACarrito">
            <Link to="/cart">
              <Button color="black" colorLetter="yellow" colorBorder="yellow">
                ir al carrito
              </Button>
            </Link>
          </div>
          <div className="volverCatalogo">
            <Link to="/">
              <Button color="black" colorLetter="yellow" colorBorder="yellow">
                volver al catalogo
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <ClickCounter onAddToCart={onAddToCart} stock={stock} />
      )}
    </div>
  );
}

export default ItemDetail;
