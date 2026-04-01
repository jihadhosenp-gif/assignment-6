import ProductCard from "./ProductCard";

const Products = ({ products, addToCart }) => {
  return (
    <div className="products">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;