import { CircularProgress, Container } from "@mui/material";
import ProductDetails from "./ProductDetails";
import useProduct from "../common/hooks/useProduct";
import ProductProposal from "./ProductProposal";
import { Box } from "@mui/system";

export default function DetailsPage() {
  const product = useProduct();

  return (
    <Container maxWidth="lg">
      {product.id ? (
        <ProductDetails product={product} />
      ) : (
        <Box
          sx={{
            width: "100%",
            aspectRatio: "1",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {<ProductProposal category={product.category} />}
    </Container>
  );
}
