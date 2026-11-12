
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";
import { getProductById } from "../services/productService";

function ProductDetails({ onAddToCart }) {
  // Get product ID from the URL
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-details">
      <div className="details-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="details-info">
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>${product.price.toFixed(2)}</h2>

        <p>Category: {product.category}</p>

        <p>
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </p>

        <button onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
