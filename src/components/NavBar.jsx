import React from "react";
import CartWidget from "./CartWidget.jsx/CartWidget";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <h3>Mi tienda</h3>
      <ul>
        <li>
          <Link to="/">Mi Tienda </Link>
        </li>
        <li>
          <Link to="/detalle/:id">Detalle </Link>
        </li>
        <li>
          <Link to="/category/carne">carne</Link>
        </li>
        <li>
          <Link to="/category/pollo">pollo</Link>
        </li>
        <li>
          <Link to="/category/cerdo">cerdo</Link>
        </li>
        <li>
          <Link to="/category/pescados">pescados</Link>
        </li>
        <li>
          <Link to="/category/mariscos">mariscos</Link>
        </li>
        <li>
          <Link to="/category/embutidos">embutidos</Link>
        </li>
        <li>
          <Link to="/category/veggie">veggie</Link>
        </li>
        <li>
          <Link to="/category/arepas">Arepas</Link>
        </li>
      </ul>
      <CartWidget />
    </>
  );
}

export default NavBar;
