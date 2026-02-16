export default function Menu({
  items = [],
  addToCart,
  categories = [],
  selectedCategory,
  setSelectedCategory
}) 
 {
  return (
    <div>
      <h2 style={{ marginBottom: "15px" }}>Restaurant Menu</h2>

      {/* MENU ITEMS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px"
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px"
            }}
          >
            {/* IMAGE FIX */}
            <img
              src={item.image}
              alt={item.name}
              width="100%"
              height="150"
              style={{
                objectFit: "contain",   // ✅ no cutting
                background: "#f2f2f2"
              }}
            />

            <p>
              <b>{item.category}</b>
            </p>

            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <h4>₹{item.price}</h4>

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
