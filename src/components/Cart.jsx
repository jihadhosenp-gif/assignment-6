const Cart = ({ cart, removeItem, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart Empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>

              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ${total}</h3>

          <button onClick={checkout} className="btn">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;