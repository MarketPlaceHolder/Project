import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function useProduct() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const json = await response.json();
        if (!json) return navigate("/");
        setProduct(json);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProduct();
  }, [productId, navigate]);

  const { rating, ...rest } = product;

  return { ...rest, ...rating };
}
