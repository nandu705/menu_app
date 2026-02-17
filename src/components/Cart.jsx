import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlaceOrderModal from "./PlaceOrderModal";

export default function Cart({ cart, setCart }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const increase = (id) =>
    setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));

  const decrease = (id) =>
    setCart(
      cart.map((i) =>
        i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
      )
    );

  const remove = (id) => setCart(cart.filter((i) => i.id !== id));

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleSubmitOrder = (customerDetails) => {
    console.log("Order Details:", {
      customerDetails,
      items: cart,
      total,
      dateTime: new Date().toLocaleString(),
    });
    alert("✅ Order placed successfully!");
    setCart([]);
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="container py-3">
      <h2 className="mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="row align-items-center mb-3 p-2 border"
            >
              {/* Image */}
              <div className="col-12 col-md-2 mb-2 mb-md-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid"
                  style={{ background: "#f2f2f2", objectFit: "contain" }}
                />
              </div>

              {/* Details + Qty */}
              <div className="col-12 col-md-7 mb-2 mb-md-0">
                <h5>{item.name}</h5>
                <p>₹{item.price}</p>
                <div className="d-flex gap-2 align-items-center">
                  <button onClick={() => decrease(item.id)}>-</button>
                  <b>{item.qty}</b>
                  <button onClick={() => increase(item.id)}>+</button>
                  <button onClick={() => remove(item.id)}>🗑</button>
                </div>
              </div>

              {/* Item Total */}
              <div className="col-12 col-md-3 text-md-end">
                <h5>₹{item.price * item.qty}</h5>
              </div>
            </div>
          ))}

          {/* Total & Place Order */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
            <h3>Total: ₹{total}</h3>
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-dark mt-2 mt-md-0"
            >
              Place Order
            </button>
          </div>
        </>
      )}

      {showModal && (
        <PlaceOrderModal
          cart={cart}
          totalPrice={total}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmitOrder}
        />
      )}
    </div>
  );
}
