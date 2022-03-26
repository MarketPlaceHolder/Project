import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function useProduct(paramId) {
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const { productId: uriId } = useParams();
  const id = parseInt(paramId) || parseInt(uriId);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`,
          { mode: "cors" }
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
          `https://fakestoreapi.com/products/category/${product.category}`,
          { mode: "cors" }
        );
        const json = await response.json();
        if (!json) return navigate("/");
        const filtered = json.filter((item) => item.id !== id).slice(0, 3);
        setSimilarProducts(filtered);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProduct();
    fetchSimilarItems();
  }, [id, navigate, product.category]);

  return { product, similarProducts };
}
