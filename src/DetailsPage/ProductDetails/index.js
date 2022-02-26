import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [
    {
      id,
      title,
      image,
      description,
      price,
      category,
      rating: { rate, count },
    },
    setProduct,
  ] = useState({ rating: {} });
  const { productId } = useParams();
  useEffect(
    () =>
      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => setProduct(res.data)),
    [productId]
  );

  return (
    <div>
      <div>{id}</div>
      <div>{title}</div>
      <div>{description}</div>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>{category}</div>
      <div>{price}</div>
      <div>{rate}</div>
      <div>{count}</div>
    </div>
  );
}
