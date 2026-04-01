import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import CTA from "./components/CTA"; // ✅ CTA import added

import data from "./data/products.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart");
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Removed from cart");
  };

  const checkout = () => {
    setCart([]);
    toast.info("Checkout successful");
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />

      <div className="toggle">
        <button onClick={() => setView("products")}>Products</button>
        <button onClick={() => setView("cart")}>
          Cart ({cart.length})
        </button>
      </div>

      {view === "products" ? (
        <Products data={data} addToCart={addToCart} />
      ) : (
        <Cart cart={cart} removeItem={removeItem} checkout={checkout} />
      )}

      <Steps />
      <Pricing />

      {/* 🔶 CTA Section (Footer এর আগে বসানো হয়েছে) */}
      <CTA />

      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;