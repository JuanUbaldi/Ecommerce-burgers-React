import React, { useState, useEffect } from "react";
import { getItemFromAPI } from "../../MockService/MockService";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import ClickCounter from "../ClickCounter/ClickCounter";

function ItemDetailContainer() {
  let [product, setProduct] = useState([]);
  let params = useParams();
  let id = params.id;
  useEffect(() => {
    getItemFromAPI(id)
      .then((itemsDB) => {
        setProduct(itemsDB);
        console.log(itemsDB);
      })
      .catch((error) => alert(error));
  }, [id]);
  return (
    <div className="detail">
      <img className="flagDetail" src={product.imgFlag} alt="" />
      <h2>El producto elegido es: {product.name}</h2>
      <img src={product.imgBurger} alt="" />
      <h4>{product.price}</h4>
      <ClickCounter stock={product.stock} />
    </div>
  );
}

export default ItemDetailContainer;
