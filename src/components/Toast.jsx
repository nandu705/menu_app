import React from "react";

export default function Toast({ visible, message }) {
  if (!visible) return null;

  const style = {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#333",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    zIndex: 9999,
    maxWidth: "90%",
    textAlign: "center",
  };

  return (
    <div style={style} role="status" aria-live="polite">
      {message}
    </div>
  );
}
