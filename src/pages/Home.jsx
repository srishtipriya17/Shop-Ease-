
// Import React hooks
import { useEffect, useState } from "react";

// Import components
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";

// Import API functions
import {
  getAllProducts,
  getCategories
} from "../services/productService";

// Home Page Component
function Home({ onAddToCart }) {

  // Store all products
  const [products, setProducts] = useState([]);

  // Store product categories
  const [categories, setCategories] = useState([]);

  // Store selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Store search text
  const [searchTerm, setSearchTerm] = useState("");

  // Store selected sorting option
  const [sortOrder, setSortOrder] = useState("default");

  // Track loading status
  const [loading, setLoading] = useState(true);

  // Store error message
  const [error, setError] = useState("");

  // Fetch all products from API
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

  // Fetch product categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);

      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);

  // Filter products by category and search text
  const filteredProducts = products.filter((product) => {

    // Check selected category
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    // Check search text in product title
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Product must match both conditions
    return matchesCategory && matchesSearch;
  });

  // Sort filtered products according to price
  const sortedProducts = [...filteredProducts].sort((a, b) => {

    if (sortOrder === "low-to-high") {
      return a.price - b.price;
    }

    if (sortOrder === "high-to-low") {
      return b.price - a.price;
    }

    // Keep original order when no sorting is selected
    return 0;
  });

  return (
    <div className="home-page">

      {/* Home Page Heading */}
      <div className="home-heading">
        <h1>Explore Our Products</h1>
        <p>Find the best products at great prices.</p>
      </div>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />
      </div>

      {/* Category Filter */}
      <div className="category-filter">

        <label htmlFor="category">Filter by Category:</label>

        <select
          id="category"
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(event.target.value)
          }
        >
          <option value="All">All Categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

      </div>

      {/* Price Sorting */}
      <div className="sort-filter">

        <label htmlFor="sort">Sort by Price:</label>

        <select
          id="sort"
          value={sortOrder}
          onChange={(event) =>
            setSortOrder(event.target.value)
          }
        >
          <option value="default">Default</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>

      </div>

      {/* Show Loader while fetching products */}
      {loading && <Loader />}

      {/* Show Error Message */}
      {!loading && error && (
        <p className="error-message">{error}</p>
      )}

      {/* Display Sorted Products */}
      {!loading && !error && sortedProducts.length > 0 && (
        <ProductList
          products={sortedProducts}
          onAddToCart={onAddToCart}
        />
      )}

      {/* Show Message if no products match */}
      {!loading && !error && sortedProducts.length === 0 && (
        <p>No products found. Try another search.</p>
      )}

    </div>
  );
}

// Export Home component
export default Home;
