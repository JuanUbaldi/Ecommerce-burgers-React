import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="homeRelative">
        <div className="homeText">
          <h1 className="homeH1">PUNTO HAMBURGUESA</h1>
          <h2 className="homeH2">Una experiencia fuera de este planeta</h2>
          <Link to="/products">
            <button className="buttonHome"> Ir a la tienda</button>
          </Link>
        </div>
        <img className="homeImg" src="./img/hamburguesaHome.png" alt="" />
      </div>
    </div>
  );
};
export default Home;
