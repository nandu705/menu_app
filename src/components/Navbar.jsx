import { Link } from "react-router-dom";

export default function Navbar({
  categories = [],
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      {/* Left Side: Brand */}
      <span className="navbar-brand fw-bold">
        My Restaurant
      </span>

      {/* Right Side */}
      <div className="ms-auto d-flex gap-3 align-items-center">

        {/* Categories */}
        {["All", ...categories].map((cat, index) => (
          <span
            key={index}
            onClick={() => setSelectedCategory(cat)}
            style={{
              cursor: "pointer",
              fontWeight: selectedCategory === cat ? "700" : "500",
              borderBottom:
                selectedCategory === cat ? "2px solid black" : "none",
              paddingBottom: "2px"
            }}
          >
            {cat}
          </span>
        ))}

        {/* Cart link */}
        <Link to="/cart" style={{ textDecoration: "none", fontSize: "20px" }}>
          🛒
        </Link>

        {/* Search Icon */}
        <span style={{ cursor: "pointer", fontSize: "20px" }}>🔍</span>
      </div>
    </nav>
  );
}
