import React from "react";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
function ItemList(props) {
  let emptyArray = props.productsList.length === 0;
  return (
    <>
      {emptyArray ? (
        <Loader />
      ) : (
        props.productsList.map((product) => (
          <Item key={product.id} product={product} />
        ))
      )}
    </>
  );
}

export default ItemList;
