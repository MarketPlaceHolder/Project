export default function useCart() {
  const addToCart = (productId, qty) => {
    const cart = JSON.parse(window.localStorage.getItem("cart")) || [];
    const productOrUndefined = cart.find((obj) => productId === obj.id);
    const product = productOrUndefined || { id: productId, qty: 0 };
    product.qty += parseInt(qty);
    if (!productOrUndefined) cart.push(product);
    window.localStorage.setItem("cart", JSON.stringify(cart));
  };
  return { addToCart };
}
