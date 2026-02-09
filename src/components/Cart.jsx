export default function Cart({ cart, setCart }) {

  const increase = (id) => {
    setCart(cart.map(i =>
      i.id === id ? { ...i, qty: i.qty + 1 } : i
    ));
  };

  const decrease = (id) => {
    setCart(cart.map(i =>
      i.id === id && i.qty > 1
        ? { ...i, qty: i.qty - 1 }
        : i
    ));
  };

  const remove = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  const total = cart.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  return (
    <div style={{ padding: "30px" }}>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "20px",
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            alignItems: "center"
          }}
        >
          {/* IMAGE */}
          <img
            src={item.image}
            alt={item.name}
            width="120"
            height="90"
            style={{ objectFit: "contain", background: "#f2f2f2" }}
          />

          {/* DETAILS */}
          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button onClick={() => decrease(item.id)}>-</button>
              <b>{item.qty}</b>
              <button onClick={() => increase(item.id)}>+</button>
              <button onClick={() => remove(item.id)}>🗑</button>
            </div>
          </div>

          {/* ITEM TOTAL */}
          <h4>₹{item.price * item.qty}</h4>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}
