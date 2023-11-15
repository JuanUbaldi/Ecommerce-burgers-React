import { useLocation, Route, Routes } from "react-router-dom";
import "./App.css";

import CartView from "./components/CartView/CartView";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import Checkout from "./components/Checkout/Checkout";
import { CartContextProvider } from "./storage/CartContext";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <CartContextProvider>
        {pathname !== "/" && (
          <header className="App-header">
            <NavBar />
          </header>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout/:orderId" element={<Checkout />} />
        </Routes>
      </CartContextProvider>
      {pathname !== "/" && (
        <header className="App-header">
          <Footer />
        </header>
      )}
    </div>
  );
}

export default App;
