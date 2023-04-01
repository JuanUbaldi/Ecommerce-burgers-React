import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import getItemsFromAPI, 
 {  getItemFromAPIByCategory,
} from "../../service/firebase";
import { useParams } from "react-router-dom";
function ItemListContainer() {
  let [productsList, setProductsList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getItemFromAPIByCategory(categoryId).then((itemsDB) => {
        setProductsList(itemsDB);
      });
    } else {
      getItemsFromAPI().then((itemsDB) => {
        setProductsList(itemsDB);
      });
    }
  }, [categoryId]);
  return (
    <div className="flex">
      <ItemList productsList={productsList} />
    </div>
  );
}

export default ItemListContainer;
