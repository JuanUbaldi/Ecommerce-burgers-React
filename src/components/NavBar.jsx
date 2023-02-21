import React from "react";
import CartWidget from "./CartWidget.jsx/CartWidget";
function NavBar() {
  return (
    <>
      <h3>Mi tienda</h3>
      <ul>
        <li>
          <a href="/categoriax">categoria x </a>
        </li>
        <li>
          <a href="/categoriax">categoria x </a>
        </li>
        <li>
          <a href="/categoriax"> categoria x</a>
        </li>
      </ul>
      <CartWidget />
    </>
  );
}

export default NavBar;
