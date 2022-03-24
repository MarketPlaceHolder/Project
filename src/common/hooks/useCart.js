import { useEffect, useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cart")) || []
  );

  const nbItems = cart.length;

  const productOrUndefined = (id) => cart.find((obj) => obj.id === id);

  const orderIsValid = ({ qty }) => {
    return !isNaN(qty) && qty > 0;
  };

  const addToCart = (product, qty) => {
    if (!orderIsValid({ qty })) return;
    const updatedCart = cart.map((item) => {
      return product.id === item.id
        ? {
            ...product,
            qty: parseInt(item.qty) + parseInt(qty),
          }
        : item;
    });
    const finalCart = productOrUndefined(product.id)
      ? updatedCart
      : [...cart, { ...product, qty: parseInt(qty) }];
    setCart(finalCart);
  };

  const removeFromCart = ({ id }) => {
    if (productOrUndefined(id)) {
      const finalCart = cart.filter((product) => product.id !== id);
      setCart(finalCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  return { cart, nbItems, addToCart, removeFromCart, clearCart };
}
