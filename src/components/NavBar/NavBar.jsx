import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navBar">
      <div className="navBarTitulo">
        <img className="navBarImg" src="/img/brujula.png" alt="foto" />
        <h1>Punto Hamburguesa</h1>
        <CartWidget />
      </div>
      <ul className="navBarList">
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
    </div>
  );
}

export default NavBar;
