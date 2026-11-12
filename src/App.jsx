
// Import React hooks
import { useEffect, useState } from "react";

// Import routing components
import { Routes, Route } from "react-router-dom";

// Import common components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {

  // Get previously saved cart data from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");

    // If saved data exists, convert it into JavaScript data
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart data whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add a product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {

      // Check whether product already exists
      const existingItem = prevItems.find(
        (item) => item.id === product.id
      );

      // Increase quantity if product already exists
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Add new product with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Function to update product quantity
  const updateQuantity = (productId, change) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Function to remove product from cart
  const removeItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Calculate total cart quantity
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* Website Navbar */}
      <Navbar cartCount={cartCount} />

      {/* Website Pages */}
      <main>
        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={<Home onAddToCart={addToCart} />}
          />

          {/* Product Details Page */}
          <Route
            path="/product/:id"
            element={
              <ProductDetails onAddToCart={addToCart} />
            }
          />

          {/* Shopping Cart Page */}
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            }
          />

          {/* Page Not Found */}
          <Route
            path="*"
            element={<h2>404 - Page Not Found</h2>}
          />

        </Routes>
      </main>

      {/* Website Footer */}
      <Footer />
    </>
  );
}

export default App;
