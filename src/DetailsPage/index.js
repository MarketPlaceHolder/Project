import { Container } from "@mui/material";
import React from "react";
import ProductDetails from "./ProductDetails";
import useProduct from "../common/hooks/useProduct";
import ProductProposal from "./ProductProposal";

export default function DetailsPage() {
  const product = useProduct();
  return (
    <Container maxWidth="lg">
      {product.id && <ProductDetails product={product} />}
      {product.category && <ProductProposal category={product.category} />}
    </Container>
  );
}
