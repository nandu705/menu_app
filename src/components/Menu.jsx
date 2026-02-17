export default function Menu({ items = [], addToCart }) {
  return (
    <div className="container my-3">
      <h2 className="text-center mb-4">Restaurant Menu</h2>

      <div className="row g-3">
        {items.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ objectFit: "contain", height: "180px", background: "#f2f2f2" }}
              />

              {/* Body */}
              <div className="card-body d-flex flex-column">
                <p className="mb-1"><b>{item.category}</b></p>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <h6>₹{item.price}</h6>

                {/* Button at bottom */}
                <button
                  className="btn btn-dark mt-auto"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
