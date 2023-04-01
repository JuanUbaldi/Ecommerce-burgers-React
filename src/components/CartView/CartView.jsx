import React from "react";
import { useContext } from "react";
import { createBuyOrderFirestore } from "../../service/firebase";
import context from "../../storage/CartContext";
import Button from "../Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import BuyForm from "./BuyForm";
import "./cartView.css";
import EmptyCart from "../EmptyCart/EmptyCart";

function CartView() {
  const { cart, removeItems, totalPriceInCart, clear } = useContext(context);
  const navigate = useNavigate();

  function createBuyOrder(userData) {
    const buyData = {
      buyer: userData,
      items: cart,
      total: totalPriceInCart(),
      date: new Date(),
    };
    createBuyOrderFirestore(buyData).then((orderId) => {
      navigate(`/checkout/${orderId}`);
      clear();
      Swal.fire({
        title: "Sweet!",
        text: `el identificador de tu compra es ${orderId}`,
        imageUrl: "/img/swalBurger.jpg",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    });
  }

  return cart.length === 0 ? (
    <EmptyCart />
  ) : (
    <div>
      <h1 className="carritoLleno">Este es el contenido de tu carrito</h1>

      {cart.map((itemCart) => (
        <div className="cartView" key={itemCart.id}>
          <img
            style={{ width: "50px", height: "50px" }}
            src={itemCart.imgFlag}
            alt=""
          />
          <img
            style={{ width: "150px", height: "100px" }}
            src={itemCart.imgBurger}
            alt=""
          />
          <div className="cartDetail">
            <h4>{itemCart.name}</h4>
            <h4>{itemCart.price}</h4>
            <h4> cantidad: {itemCart.amount}</h4>
            <h4>Precio total a pagar: {itemCart.price * itemCart.amount}</h4>
          </div>
          <Button
            className="eliminarCarrito"
            width="100px"
            height="50px"
            color="black"
            colorLetter="yellow"
            colorBorder="yellow"
            onClick={() => removeItems(itemCart.id)}
          >
            Eliminar del carrito
          </Button>
        </div>
      ))}
      <div className="volverACatalogo">
        <Link to="/">
          <Button color="black" colorLetter="yellow" colorBorder="yellow">
            Volver al catalogo
          </Button>
        </Link>
      </div>
      <div className="limpiarCarrito">
        <Button
          color="black"
          colorLetter="yellow"
          colorBorder="yellow"
          onClick={clear}
        >
          limpiar el carrito
        </Button>
      </div>
      <h1 className="totalPrice">
        El precio total a pagar es: {totalPriceInCart()}
      </h1>
      <BuyForm onSubmit={createBuyOrder} />
    </div>
  );
}

export default CartView;
