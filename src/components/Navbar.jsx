export default function Navbar({ count }) {
  return (
    <nav className="navbar">
      <h2 className="logo">DigiTools</h2>

      <ul className="nav-links">
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>FAQ</li>
      </ul>

      <div className="nav-right">
        <span className="login">Login</span>
        <button className="primary-btn">Get Started</button>
      </div>
    </nav>
  );
}