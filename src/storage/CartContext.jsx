import { createContext, useState } from "react";

const context = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(itemData) {
    let itemFound = cart.find((itemInCart) => itemInCart.id === itemData.id);
    if (itemFound) {
      let newcart = cart.map((itemInCart) => {
        if (itemInCart.id === itemData.id) {
          itemInCart.amount += itemData.amount;
          return itemInCart;
        } else {
          return itemInCart;
        }
      });
      setCart(newcart);
    } else {
      const newCart = [...cart];
      newCart.push(itemData);
      setCart(newCart);
    }
  }

  function totalItemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total = total + itemInCart.amount;
    });
    return total;
  }

  function totalPriceInCart() {
    let total = 0;
    cart.forEach((itemInCart) => {
      total += itemInCart.amount * itemInCart.price;
    });
    return total;
  }

  function removeItems(id) {
    console.log(`removiendo el item ${id}`);
    let removedItem = cart.filter((itemCart) => itemCart.id !== id);
    setCart(removedItem);
  }

  function clear() {
    setCart([]);
  }

  const value = {
    cart,
    addToCart,
    totalItemsInCart,
    removeItems,
    totalPriceInCart,
    clear,
  };
  return <context.Provider value={value}>{props.children}</context.Provider>;
}
export default context;
