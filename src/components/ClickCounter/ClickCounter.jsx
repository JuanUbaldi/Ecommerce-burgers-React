import React, { useState } from "react";

function ClickCounter(props) {
  const [amount, setAmount] = useState(1);

  function sumar() {
    if (amount < props.stock) {
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
      <button onClick={sumar} color="blue">
        +
      </button>
      <h2>La cantidad de productos que agregaste es: {amount}</h2>
      <button onClick={restar} color="red">
        -
      </button>
    </div>
  );
}

export default ClickCounter;
