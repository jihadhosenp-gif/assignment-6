const Cart = ({ cart, remove, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => remove(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total: ${total}</h2>
          <button onClick={checkout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;