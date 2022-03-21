import { removeProduct } from "../../store/modules/cart/actions";
import { useDispatch } from "react-redux";

const CartProductCard = ({ cartProduct }) => {
  const dispatch = useDispatch();
  const handleClickRemove = () => dispatch(removeProduct(cartProduct));

  return (
    <div id="cartProductCard">
      <p className="productName"> {cartProduct.name}</p>
      <img src={cartProduct.image} />
      <div id="precoEAdicionar">
        <p className="price">R$ {cartProduct.price}</p>
        <button className="btnAddToCart" onClick={handleClickRemove}>
          Remover do carrinho
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
