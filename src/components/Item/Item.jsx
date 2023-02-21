import React from "react";
import "./Item.css";
function Item(props) {
  return (
    <div className="card">
      <div>
        <img src={props.imgUrl} alt="hamburguesa" />

        <div className="card-detail">
          <h2>{props.title}</h2>
          <p>{props.detail}</p>
          <h4>{props.price}</h4>
        </div>
        <button>ver mas</button>
      </div>
    </div>
  );
}

export default Item;
