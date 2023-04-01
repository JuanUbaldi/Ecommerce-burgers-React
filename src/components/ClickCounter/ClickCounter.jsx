import React, { useState } from "react";
import Button from "../Button";
import "./clickCounter.css";
function ClickCounter({ stock, onAddToCart }) {
  const [amount, setAmount] = useState(1);

  function sumar() {
    if (amount < stock) {
      setAmount(amount + 1);
    }
  }
  function restar() {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  return (
    <div>
      <Button onClick={sumar} color="orange">
        +
      </Button>
      <h2>La cantidad de productos que agregaste es: {amount}</h2>
      <Button onClick={restar} color="orange">
        -
      </Button>
      <div className="bottomClickCounter">
        <Button
          color="black"
          colorLetter="yellow"
          colorBorder="yellow"
          onClick={() => onAddToCart(amount)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default ClickCounter;
