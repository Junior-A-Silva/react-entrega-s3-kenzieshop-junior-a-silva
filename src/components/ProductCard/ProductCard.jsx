import { addProduct } from "../../store/modules/cart/actions";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  console.log("Product", product);
  const handleClickAdd = () => dispatch(addProduct(product));

  return (
    <div id="productCard">
      <p className="productName"> {product.name}</p>
      <img src={product.image} />
      <div id="precoEAdicionar">
        <p className="price">R$ {product.price}</p>
        <button className="btnAddToCart" onClick={handleClickAdd}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
