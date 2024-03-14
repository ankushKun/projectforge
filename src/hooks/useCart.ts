import { useEffect, useState } from "react";
import { type TCartItem } from "@/types/cart";

export default function useCart() {
  const [cart, setCart] = useState<TCartItem[]>([]);

  const addToCart = (product: string) => {
    setCart([...cart, { id: product, quantity: 1 }]);
  };

  const removeFromCart = (product: string) => {
    setCart(cart.filter((item) => item.id !== product));
  };

  const incrementItem = (product: string) => {
    setCart(
      cart.map((item) => {
        if (item.id === product) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    );
  };

  const decrementItem = (product: string) => {
    setCart(
      cart.map((item) => {
        if (item.id === product) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    );
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated"));
  }, [cart]);

  return {
    cart,
    addToCart,
    removeFromCart,
    incrementItem,
    decrementItem,
  };
}
