import { useState } from "react";
import menu from "./data/menu.json";

export default function App() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");

  const add = (item) => {
    const found = cart.find(i => i.id === item.id);
    if (found) {
      setCart(cart.map(i =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      ));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const inc = (id) => {
    setCart(cart.map(i =>
      i.id === id ? { ...i, qty: i.qty + 1 } : i
    ));
  };

  const dec = (id) => {
    setCart(cart.map(i =>
      i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
    ));
  };

  const remove = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  const clear = () => setCart([]);

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const submit = () => {
    alert("Order placed successfully");
    console.log({
      cart,
      total,
      input,
      time: new Date()
    });
    clear();
    setShow(false);
    setInput("");
  };

  return (
    <div style={{ display: "flex", padding: 20 }}>

      {/* MENU */}
      <div style={{ width: "50%" }}>
        <h2>Menu</h2>
        {menu.map(item => (
          <div key={item.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
            <img src={item.image} />
            <p>{item.category}</p>
            <b>{item.name}</b>
            <p>{item.description}</p>
            <p>₹{item.price}</p>
            <button onClick={() => add(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* CART */}
      <div style={{ width: "50%" }}>
        <h2>Cart</h2>
        {cart.map(i => (
          <div key={i.id}>
            {i.name} - ₹{i.price}
            <button onClick={() => dec(i.id)}>-</button>
            {i.qty}
            <button onClick={() => inc(i.id)}>+</button>
            = ₹{i.price * i.qty}
            <button onClick={() => remove(i.id)}>X</button>
          </div>
        ))}

        <h3>Total: ₹{total}</h3>

        <button onClick={clear}>Clear Cart</button>
        <button onClick={() => setShow(true)} disabled={cart.length === 0}>
          Place Order
        </button>
      </div>

      {/* MODAL */}
      {show && (
        <div style={{
          position: "fixed",
          top: "25%",
          left: "35%",
          background: "white",
          border: "2px solid black",
          padding: 20
        }}>
          <h3>Enter Table / Name</h3>
          <input value={input} onChange={e => setInput(e.target.value)} />

          <h4>Summary</h4>
          {cart.map(i => (
            <div key={i.id}>{i.name} x {i.qty}</div>
          ))}

          <p>Total: ₹{total}</p>

          <button onClick={submit}>Submit</button>
          <button onClick={() => setShow(false)}>Cancel</button>
        </div>
      )}

    </div>
  );
}
