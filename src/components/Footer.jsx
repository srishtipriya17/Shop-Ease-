
import "./Footer.css";

// Reusable Footer component
function Footer() {
  return (
    <footer className="footer">

      {/* Website branding */}
      <h3 className="footer-logo">
        Shop<span>Ease</span>
      </h3>

      {/* Short website description */}
      <p className="footer-description">
        Find your favourite products at the best prices.
      </p>

      {/* Copyright information */}
      <p className="footer-copyright">
        © 2026 ShopEase. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;
