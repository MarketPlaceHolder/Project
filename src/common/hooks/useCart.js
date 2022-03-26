import { useEffect, useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cart")) || []
  );

  const nbItems = cart.reduce((acc, val) => acc + parseInt(val.qty), 0);

  const totalPrice =
    0 || cart.reduce((acc, val) => acc + parseFloat(val.qty * val.price), 0);

  const productOrUndefined = (productId) =>
    cart.find((cartItem) => cartItem.id === productId);

  const orderIsValid = ({ qty }) => {
    return !isNaN(qty) && qty > 0;
  };

  const addToCart = (product, qty) => {
    if (!orderIsValid({ qty })) return;

    const newCart = productOrUndefined(product.id)
      ? cart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...product, qty: parseInt(cartItem.qty) + parseInt(qty) }
            : cartItem
        )
      : [...cart, { ...product, qty: qty }];

    setCart(newCart);
  };

  const removeFromCart = (product) => {
    if (productOrUndefined(product.id)) {
      const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return { cart, nbItems, totalPrice, addToCart, removeFromCart, clearCart };
}
