export default function Menu({
  items = [],
  addToCart,
  categories = [],
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <div>
      <h2 style={{ marginBottom: "15px" }}>Restaurant Menu</h2>

      {/* CATEGORY HEADER */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setSelectedCategory("All")}
          style={{
            marginRight: "10px",
            padding: "6px 12px",
            cursor: "pointer",
            fontWeight: selectedCategory === "All" ? "bold" : "normal"
          }}
        >
          All
        </button>

        {categories
          .filter((cat) => cat !== "All")
          .map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              style={{
                marginRight: "10px",
                padding: "6px 12px",
                cursor: "pointer",
                fontWeight: selectedCategory === cat ? "bold" : "normal"
              }}
            >
              {cat}
            </button>
          ))}
      </div>

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
            <img
              src={item.image}
              alt={item.name}
              width="100%"
              height="150"
              style={{
                objectFit: "contain",
                background: "#f2f2f2"
              }}
            />

            <p><b>{item.category}</b></p>
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
