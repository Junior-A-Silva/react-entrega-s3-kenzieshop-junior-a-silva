import { useSelector } from "react-redux";
import CartProductCard from "../CartProductCard/CartProductCard";

const CartList = () => {
  const cartProducts = useSelector((state) => state.cartProducts);
  return (
    <div className="productContainer">
      {cartProducts.map((cartProducts) => (
        <CartProductCard cartProduct={cartProducts} />
      ))}
    </div>
  );
};
export default CartList;
