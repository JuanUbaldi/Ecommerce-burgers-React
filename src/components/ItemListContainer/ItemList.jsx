import React from "react";
import Item from "../Item/Item";

function ItemList(props) {
  return (
    <>
      {props.productsList.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </>
  );
}

export default ItemList;
