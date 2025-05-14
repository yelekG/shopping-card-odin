export default function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div
              key={item.id}
              style={{
                borderBottom: "1px solid #ccc",
                marginBottom: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <h2>{item.title}</h2>
              <p>Price: {item.price}₺</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: {item.price * item.quantity}₺</p>
            </div>
          ))}

          <h2>Total: {totalPrice.toFixed(2)}₺</h2>
        </div>
      )}
    </div>
  );
}
