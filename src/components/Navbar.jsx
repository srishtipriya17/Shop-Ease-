import { Link } from "react-router-dom";
import "./Navbar.css";

// Reusable Navbar component
// cartCount will come from the parent component through props.
function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar">

      {/* Website Logo */}
      <Link to="/" className="navbar-logo">
        Shop<span>Ease</span>
      </Link>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>

      {/* Shopping Cart Button */}
      <Link to="/cart" className="cart-button">
        <span>Cart</span>

        {/* Display live cart item count */}
        <span className="cart-count">
          {cartCount}
        </span>
      </Link>

    </nav>
  );
}

export default Navbar;
