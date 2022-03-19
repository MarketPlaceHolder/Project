import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useProduct from "../../common/hooks/useProduct";

export default function ProductProposal({ category }) {
  const product = useProduct();
  const proposal = [product, product, product];
  return (
    <Box className="wrapper" mt={5}>
      <Typography gutterBottom variant="h6">
        Articles similaires
      </Typography>
      <Grid container spacing={2}>
        {proposal.map((p, i) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card key={i}>
              <CardContent>{p.title}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
