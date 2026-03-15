import { Link } from "react-router-dom";

export default function Navbar({
  categories = ["All"],
  selectedCategory = "All",
  setSelectedCategory = () => {}
}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <div className="container-fluid">

        {/* Brand */}
        <span className="navbar-brand fw-bold">My Restaurant</span>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side */}
        <div className="ms-auto d-flex gap-3 align-items-center nav-cats">

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="row w-100 align-items-center gx-2">

              {/* Categories */}
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-auto col-md-auto col-lg-auto col-xl-auto col-xxl-auto"
                >
                  <span
                    onClick={() => setSelectedCategory(cat)}
                    className={`d-block px-2 py-1 rounded text-center ${
                      selectedCategory === cat
                        ? "fw-bold border-bottom border-dark"
                        : ""
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    {cat}
                  </span>
                </div>
              ))}

              {/* Cart Icon */}
              <div className="col-12 col-sm-auto col-md-auto col-lg-auto col-xl-auto col-xxl-auto">
                <Link
                  to="/cart"
                  className="d-block text-center fs-5 text-decoration-none"
                >
                  🛒
                </Link>
              </div>

              {/* Search Icon */}
              <div className="col-12 col-sm-auto col-md-auto col-lg-auto col-xl-auto col-xxl-auto">
                <span
                  className="d-block text-center fs-5"
                  style={{ cursor: "pointer" }}
                >
                  🔍
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}