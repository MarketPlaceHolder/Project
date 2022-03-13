import { Card, CardContent, Typography } from "@mui/material";
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          "> *": {
            flex: 1,
          },
        }}
      >
        {proposal.map((p, i) => (
          <Card key={i}>
            <CardContent>{p.title}</CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
