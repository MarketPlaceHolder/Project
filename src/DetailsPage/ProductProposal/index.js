import { Fade, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductsCard from "../../AllProductsPage/ProductsCard";
import useProduct from "../../common/hooks/useProduct";

export default function ProductProposal() {
  const { similarProducts } = useProduct();
  return (
    <Box className="wrapper" mt={5}>
      <Typography gutterBottom variant="h6">
        Articles similaires
      </Typography>
      <Grid container spacing={2}>
        {similarProducts.map(({ id, title, image }) => (
          <Fade key={id} in>
            <Grid item xs={12} sm={6} md={4}>
              <ProductsCard id={id} title={title} image={image} />
            </Grid>
          </Fade>
        ))}
      </Grid>
    </Box>
  );
}
