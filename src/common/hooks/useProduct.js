import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function useProduct(paramId) {
  const [product, setProduct] = useState({});
  const { productId: uriId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${paramId || uriId}`
        );
        const json = await response.json();
        if (!json) return navigate("/");
        setProduct(json);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProduct();
  }, [uriId, paramId, navigate]);

  const { rating, ...rest } = product;

  return { ...rest, ...rating };
}
