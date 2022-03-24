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
            id: item.id,
            qty: parseInt(item.qty) + parseInt(qty),
            data: product,
          }
        : item;
    });
    const finalCart = productOrUndefined(product.id)
      ? updatedCart
      : [...cart, { id: product.id, qty: parseInt(qty), data: product }];
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
