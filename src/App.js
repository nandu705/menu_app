// import { useState } from "react";
// import menuData from "./data/menu.json";

// import Menu from "./components/Menu";
// import Navbar from "./components/Navbar";

// export default function App() {
//   const [cart, setCart] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   // Extract unique categories
//   const categories = [...new Set(menuData.map((item) => item.category))];

//   // Filter items based on category
//   const filteredItems =
//     selectedCategory === "All"
//       ? menuData
//       : menuData.filter((item) => item.category === selectedCategory);

//   // Add to cart function
//   const addToCart = (item) => {
//     const found = cart.find((i) => i.id === item.id);

//     if (found) {
//       setCart(
//         cart.map((i) =>
//           i.id === item.id ? { ...i, qty: i.qty + 1 } : i
//         )
//       );
//     } else {
//       setCart([...cart, { ...item, qty: 1 }]);
//     }
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />

//       {/* Menu (Only ONE time) */}
//       <div style={{ padding: "30px" }}>
//         <Menu
//           items={filteredItems}
//           addToCart={addToCart}
//           categories={categories}
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//         />
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import menuData from "./data/menu.json";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Toast from "./components/Toast";

export default function App() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState({ visible: false, message: "" });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(menuData.map(item => item.category))];

  const filteredItems =
    selectedCategory === "All"
      ? menuData
      : menuData.filter(item => item.category === selectedCategory);

  const addToCart = (item) => {
    const found = cart.find(i => i.id === item.id);

    if (found) {
      setCart(
        cart.map(i =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }

    // show top toast popup
    setToast({ visible: true, message: `${item.name} added to cart` });
    setTimeout(() => setToast({ visible: false, message: "" }), 2000);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "30px" }}>
              <Menu
                items={filteredItems}
                addToCart={addToCart}
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          }
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
      </Routes>

      <Toast visible={toast.visible} message={toast.message} />
    </BrowserRouter>
  );
}
