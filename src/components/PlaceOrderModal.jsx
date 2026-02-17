import { useState } from "react";

export default function PlaceOrderModal({ cart, totalPrice, onClose, onSubmit }) {
  const [tableNumber, setTableNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [submitted, setSubmitted] = useState(false); // ✅ Track submission

  const canSubmit = tableNumber.trim() !== "" || customerName.trim() !== "";

  const handleSubmit = () => {
    onSubmit({
      tableNumber,
      customerName,
      dateTime: new Date().toLocaleString(),
      items: cart,
      totalPrice,
    });

    setSubmitted(true); // Show success message
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "30px" }}>
            <h2>✅ Order Placed Successfully!</h2>
            <p>Thank you for your order.</p>
            <button
              onClick={onClose}
              style={{ ...styles.submitBtn, backgroundColor: "black" }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2>Place Order</h2>

            {/* Input Fields */}
            <div style={{ marginBottom: "15px" }}>
              <label>Table Number (Dine-in)</label>
              <input
                type="text"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                placeholder="Eg: 5"
                style={styles.input}
              />
            </div>

            <p style={{ textAlign: "center", fontWeight: "bold" }}>OR</p>

            <div style={{ marginBottom: "15px" }}>
              <label>Customer Name (Takeaway)</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Eg: John"
                style={styles.input}
              />
            </div>

            {/* Order Summary */}
            <h3>Order Summary</h3>

            {cart.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.name} × {item.qty} = ₹{item.price * item.qty}
                  </li>
                ))}
              </ul>
            )}

            <h4>Total: ₹{totalPrice}</h4>

            {/* Buttons */}
            <div style={styles.buttonRow}>
              <button onClick={onClose} style={styles.cancelBtn}>
                Cancel
              </button>

              <button
                disabled={!canSubmit}
                onClick={handleSubmit}
                style={{
                  ...styles.submitBtn,
                  backgroundColor: canSubmit ? "black" : "gray",
                }}
              >
                Submit Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "25px",
    borderRadius: "10px",
    width: "400px",
    maxHeight: "80vh",
    overflowY: "auto",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  cancelBtn: {
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
  },
  submitBtn: {
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
    color: "white",
  },
};
