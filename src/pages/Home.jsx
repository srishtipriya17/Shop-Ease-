
import { useEffect, useState } from "react";

import ProductList from "../components/ProductList";
import Loader from "../components/Loader";

import { getAllProducts } from "../api/products";

// Home Page Component
function Home({ onAddToCart }) {

  // Store products received from API
  const [products, setProducts] = useState([]);

  // Track loading status
  const [loading, setLoading] = useState(true);

  // Store error message
  const [error, setError] = useState("");

  // Fetch products when Home page loads
  useEffect(() => {

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getAllProducts();

        setProducts(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

  }, []);

  return (
    <div className="home-page">

      {/* Page Heading */}
      <div className="home-heading">
        <h1>Explore Our Products</h1>
        <p>Find the best products at great prices.</p>
      </div>

      {/* Loading State */}
      {loading && <Loader />}

      {/* Error State */}
      {!loading && error && (
        <p className="error-message">{error}</p>
      )}

      {/* Product List */}
      {!loading && !error && (
        <ProductList
          products={products}
          onAddToCart={onAddToCart}
        />
      )}

    </div>
  );
}

export default Home;
