import React, { useState, useEffect } from "react";
import { getItemFromAPI } from "../../service/firebase";

import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  let [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let params = useParams();
  let id = params.id;
  useEffect(() => {
    getItemFromAPI(id)
      .then((itemsDB) => {
        setProduct(itemsDB);
      })
      .catch((error) => alert(error))
      .finally(() => setIsLoading(false));
  }, [id]);
  return <>{isLoading ? <Loader /> : <ItemDetail  product={product} />}</>;
}
export default ItemDetailContainer;
