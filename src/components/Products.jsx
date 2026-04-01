const Products = ({ data, addToCart }) => {
  return (
    <div className="grid">
      {data.map((p) => (
        <div className="card" key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <h2>${p.price}</h2>

          <ul>
            {p.features.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>

          <button onClick={() => addToCart(p)} className="btn">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;