import ProductsList from "./components/ProductsList/ProductsList";
import CartList from "./components/Cart/CartList";
import { useState } from "react";
import "./App.css";

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
        <CartList />
        <button onClick={hideCart}>Mostrar produtos da loja </button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={showCart}>Mostrar carrinho</button>
        </header>
        <ProductsList />
      </div>
    );
  }
}

export default App;
