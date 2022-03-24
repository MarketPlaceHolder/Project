import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function useProduct(paramId) {
  const [product, setProduct] = useState({});
  const [similarProduct, setSimilarProduct] = useState([]);
  const { productId: uriId } = useParams();
  const finalId = parseInt(paramId) || parseInt(uriId);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${finalId}`
        );
        const json = await response.json();
        if (!json) return navigate("/");
        setProduct(json);
      } catch (e) {
        console.error(e);
      }
    };

    const fetchSimilarItems = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${product.category}`
        );
        const json = await response.json();
        if (!json) return navigate("/");
        const filtered = json.filter((item) => item.id !== finalId).slice(0, 3);
        setSimilarProduct(filtered);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProduct();
    fetchSimilarItems();
  }, [finalId, navigate, product.category]);

  return { product, similarProduct };
}
