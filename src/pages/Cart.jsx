
// Import Link for navigation
import { Link } from "react-router-dom";

import "./Cart.css";

// Cart Page Component
// Receive cart data and functions through props
function Cart({ cartItems, onUpdateQuantity, onRemoveItem }) {

  // Calculate total price of all cart products
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {/* Check whether cart is empty */}
      {cartItems.length === 0 ? (

        <div className="empty-cart">
          <h2>Your Cart is Empty!</h2>
          <p>You haven't added any products yet.</p>

          {/* Navigate back to Home */}
          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>

      ) : (

        <div className="cart-content">

          {/* Display all cart products */}
          <div className="cart-items">

            {cartItems.map((item) => (

              <div className="cart-item" key={item.id}>

                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                />

                {/* Product Information */}
                <div className="cart-item-info">

                  <h3>{item.title}</h3>

                  <p>₹{item.price.toFixed(2)}</p>

                  {/* Quantity Controls */}
                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, -1)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, 1)
                      }
                    >
                      +
                    </button>

                  </div>

                  {/* Remove Product Button */}
                  <button
                    className="remove-button"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove
                  </button>

                </div>

                {/* Price according to quantity */}
                <h3>
                  ₹{(item.price * item.quantity).toFixed(2)}
                </h3>

              </div>

            ))}

          </div>

          {/* Order Summary */}
          <div className="cart-summary">

            <h2>Order Summary</h2>

            <p>
              Total Items:{" "}
              {cartItems.reduce(
                (total, item) => total + item.quantity,
                0
              )}
            </p>

            <h3>
              Total Amount: ₹{totalAmount.toFixed(2)}
            </h3>

            <button className="checkout-button">
              Proceed to Checkout
            </button>

            <Link to="/" className="continue-shopping">
              Continue Shopping
            </Link>

          </div>

        </div>

      )}

    </div>
  );
}

// Export Cart component
export default Cart;
