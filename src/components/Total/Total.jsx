import { useSelector } from "react-redux";

const Total = () => {
  const cartProductsPrice = useSelector((state) => state.cartProducts);
  return (
    <div>
      <p id="total">
        Carrinho: R${" "}
        {cartProductsPrice.reduce((acc, item) => acc + item.price, 0)}
      </p>
    </div>
  );
};
export default Total;
