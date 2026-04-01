const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm card border border-gray-100 h-full flex flex-col">
      <div className="text-6xl mb-6">{product.icon}</div>
      
      {product.tag && (
        <div className={`inline-block px-4 py-1 text-xs font-semibold rounded-full mb-4
          ${product.tagType === 'best-seller' ? 'bg-yellow-100 text-yellow-700' : ''}
          ${product.tagType === 'popular' ? 'bg-purple-100 text-purple-700' : ''}
          ${product.tagType === 'new' ? 'bg-green-100 text-green-700' : ''}`}>
          {product.tag}
        </div>
      )}

      <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">${product.price}</span>
          <span className="text-gray-500">/{product.period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 text-sm">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => addToCart(product)}
        className="mt-auto w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-semibold transition btn-purple"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;