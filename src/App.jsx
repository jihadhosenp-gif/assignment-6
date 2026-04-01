import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import data from "./data/products.json";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Added to cart");
  };

  const remove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const checkout = () => {
    setCart([]);
    alert("Checkout done!");
  };

  return (
    <>
      <div className="product-header">
  <h2>Premium Digital Tools</h2>
  <p>Choose from our curated collection of premium digital products</p>

  <div className="toggle">
    <button onClick={() => setView("products")}>Products</button>
    <button onClick={() => setView("cart")}>
      Cart ({cart.length})
    </button>
  </div>
</div>
      {view === "products" ? (
        <Products products={data} addToCart={addToCart} />
      ) : (
        <Cart cart={cart} remove={remove} checkout={checkout} />
      )}

      <Steps />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;