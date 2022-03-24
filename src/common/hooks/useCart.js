import { useEffect, useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cart")) || []
  );

  const nbItems = cart.length;

  const productOrUndefined = (productId) =>
    cart.find((cartItem) => cartItem.id === productId);

  const orderIsValid = ({ qty }) => {
    return !isNaN(qty) && qty > 0;
  };

  const addToCart = (product, qty) => {
    if (!orderIsValid({ qty })) return;

    const updatedCart = cart.map((cartItem) => {
      return product.id === cartItem.id
        ? { ...product, qty: parseInt(cartItem.qty) + parseInt(qty) }
        : cartItem;
    });

    const finalCart = productOrUndefined(product.id)
      ? updatedCart
      : [...cart, { ...product, qty: parseInt(qty) }];

    setCart(finalCart);
  };

  const removeFromCart = (product) => {
    if (productOrUndefined(product.id)) {
      const updatedCart = cart.filter((cartItem) => cartItem.id !== product.id);
      setCart(updatedCart);
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
