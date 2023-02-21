import React from "react";
import Item from "../Item/Item";
import "./ItemListContainer.css"
function ItemListContainer() {
  return (
    <div className="flex">
      <Item
        title="hamburguesa1"
        descripcion="combo 1 "
        price={150}
        imgUrl="/img/th.jpeg"
      />

      <Item
        title="hamburguesa2"
        descripcion="combo 2 "
        price={150}
        imgUrl="/img/th.jpeg"
      />
      <Item
        title="hamburguesa3"
        descripcion="combo 3 "
        price={150}
        imgUrl="/img/th.jpeg"
      />
      <Item
        title="hamburguesa4"
        descripcion="combo 4 "
        price={150}
        imgUrl="/img/th.jpeg"
      />
    </div>
  );
}

export default ItemListContainer;
