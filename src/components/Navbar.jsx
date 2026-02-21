// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      
//       {/* Left Side: Brand */}
//       <span className="navbar-brand fw-bold">
//   My Restaurant
// </span>


//       {/* Right Side */}
//       <div className="ms-auto d-flex gap-4 align-items-center">
        
//         <span style={{ cursor: "pointer" }}>Category</span>

//         <span style={{ cursor: "pointer", fontSize: "20px" }}>🛒</span>

//         <span style={{ cursor: "pointer", fontSize: "20px" }}>🔍</span>
//       </div>
//     </nav>
//   );
// }
import { Link } from "react-router-dom";

export default function Navbar({
  categories = ["All"],
  selectedCategory = "All",
  setSelectedCategory = () => {}
}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      {/* Left Side: Brand */}
      <span className="navbar-brand fw-bold">My Restaurant</span>

      {/* Right Side */}
      <div className="ms-auto d-flex gap-3 align-items-center nav-cats">

        {/* Categories */}
        {categories.map((cat, index) => (
          <span
            key={index}
            onClick={() => setSelectedCategory(cat)}
            style={{
              cursor: "pointer",
              fontWeight: selectedCategory === cat ? "700" : "500",
              borderBottom: selectedCategory === cat ? "2px solid black" : "none",
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

        <span style={{ cursor: "pointer", fontSize: "20px" }}>🔍</span>
      </div>
    </nav>
  );
}

