import { toast } from "react-toastify";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <span className={`tag ${product.tag}`}>
        {product.tagType}
      </span>

      <div className="icon">{product.icon}</div>

      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <h4>
        ${product.price}
        <span>/{product.period}</span>
      </h4>

      <ul>
        {product.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <button
        className="primary-btn"
        onClick={() => {
          addToCart(product);
          toast.success("Added to cart");
        }}
      >
        Buy Now
      </button>
    </div>
  );
}