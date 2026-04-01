const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar">
      <h2 className="logo">DigiTools</h2>

      <div className="nav-links">
        <span>Products</span>
        <span>Features</span>
        <span>Pricing</span>
        <span>FAQ</span>
      </div>

      <div className="nav-right">
        <span>🛒 {cartCount}</span>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;