import ProductsList from "./components/ProductsList/ProductsList";
import CartList from "./components/Cart/CartList";
import { useState } from "react";
import "./App.css";
import Total from "./components/Total/Total";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCart = () => {
    setIsCartVisible(true);
  };

  const hideCart = () => {
    setIsCartVisible(false);
  };

  if (isCartVisible) {
    return (
      <div>
        <header id="headerCart" className="App-header">
          <div id="headerContent">
            <div className="kenzieShopEBotao">
              <h2>KenzieShop</h2>
              <button id="btnMostrarProdutosLoja" onClick={hideCart}>
                Mostrar produtos da loja{" "}
              </button>
            </div>
          </div>
          <Total />
        </header>
        <CartList />
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <div id="headerContent">
            <div className="kenzieShopEBotao">
              <h2>KenzieShop</h2>
              <button id="btnMostrarCarrinho" onClick={showCart}>
                Mostrar carrinho
              </button>{" "}
            </div>
          </div>
          <Total />
        </header>
        <ProductsList />
      </div>
    );
  }
}

export default App;
