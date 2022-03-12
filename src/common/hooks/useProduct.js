import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function useProduct() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();
  useEffect(
    () =>
      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => {
          console.log(res.data);
          if (!res.data) navigate("/");
          setProduct(res.data);
        }),
    [productId, navigate]
  );

  const { rating, ...rest } = product;

  return { ...rest, ...rating };
}
