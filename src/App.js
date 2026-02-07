import { useState } from "react";
import menuData from "./data/menu.json";

import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

export default function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = [...new Set(menuData.map((item) => item.category))];

  // Filter items based on category
  const filteredItems =
    selectedCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  // Add to cart function
  const addToCart = (item) => {
    const found = cart.find((i) => i.id === item.id);

    if (found) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Menu (Only ONE time) */}
      <div style={{ padding: "30px" }}>
        <Menu
          items={filteredItems}
          addToCart={addToCart}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </div>
  );
}
