import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const found = cart.find(i => i.id === item.id);

    if (found) {
      setCart(cart.map(i =>
        i.id === item.id
          ? { ...i, qty: i.qty + 1 }
          : i
      ));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const increase = (id) => {
    setCart(cart.map(i =>
      i.id === id ? { ...i, qty: i.qty + 1 } : i
    ));
  };

  const decrease = (id) => {
    setCart(cart.map(i =>
      i.id === id && i.qty > 1
        ? { ...i, qty: i.qty - 1 }
        : i
    ));
  };

  const remove = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  return (
    <CartContext.Provider value={{
      cart, addToCart, increase, decrease, remove
    }}>
      {children}
    </CartContext.Provider>
  );
}
