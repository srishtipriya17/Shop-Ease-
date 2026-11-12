import { Link } from "react-router-dom";
import "./ProductCard.css";

// Reusable component to display a single product
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">

      {/* Product Image */}
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      {/* Product Information */}
      <div className="product-info">

        <h3 className="product-title">
          {product.title}
        </h3>

        <p className="product-price">
          ${product.price.toFixed(2)}
        </p>

        {/* Product Rating */}
        <p className="product-rating">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </p>

        {/* View Product Details */}
        <Link
          to={`/product/${product.id}`}
          className="view-details"
        >
          View Details
        </Link>

        {/* Add Product to Cart */}
        <button
          className="add-cart-button"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;