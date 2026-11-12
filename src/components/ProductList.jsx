
import ProductCard from "./ProductCard";
import "./ProductList.css";

// Component to display multiple products
function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">

      {/* Display a card for every product */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}

    </div>
  );
}

export default ProductList;
