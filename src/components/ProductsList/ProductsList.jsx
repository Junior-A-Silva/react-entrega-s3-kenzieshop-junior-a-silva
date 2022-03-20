import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const products = useSelector((state) => state.products);
  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};
export default ProductsList;
