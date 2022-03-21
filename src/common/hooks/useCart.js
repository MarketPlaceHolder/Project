import { useEffect, useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cart")) || []
  );

  const orderIsValid = ({ qty }) => {
    return !isNaN(qty) && qty > 0;
  };

  const addToCart = ({ id }, qty) => {
    if (!orderIsValid({ qty })) return;
    const productOrUndefined = cart.find((obj) => id === obj.id);
    const updatedCart = cart.map((product) => {
      return id === product.id
        ? { id: product.id, qty: parseInt(product.qty) + parseInt(qty) }
        : product;
    });
    const finalCart = productOrUndefined
      ? updatedCart
      : [...cart, { id: id, qty: qty }];
    setCart(finalCart);
    console.log(finalCart);
  };

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return { cart, addToCart };
}
