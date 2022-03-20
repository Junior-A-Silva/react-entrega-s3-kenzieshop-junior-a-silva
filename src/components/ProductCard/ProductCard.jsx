import { addProduct } from "../../store/modules/cart/actions";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Name: {product.name}</p>
      <img src={product.image} />
      <p>R$ {product.price}</p>
      <button onClick={dispatch(addProduct(product))}>
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default ProductCard;
