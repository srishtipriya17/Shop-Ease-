
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Website Navbar */}
      <Navbar />

      {/* Main Website Content */}
      <main>
        <h1>Welcome to ShopEase</h1>
        <p>Your favourite shopping destination.</p>
      </main>

      {/* Website Footer */}
      <Footer />
    </>
  );
}

export default App;
