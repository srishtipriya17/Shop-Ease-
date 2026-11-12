
import "./Loader.css";

// Reusable loading component
function Loader() {
  return (
    <div className="loader-container">

      {/* Animated loading spinner */}
      <div className="loader"></div>

      {/* Loading message */}
      <p>Loading products...</p>

    </div>
  );
}

export default Loader;
