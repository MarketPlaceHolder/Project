import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Fade,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
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
          <Grid key={id} item xs={12} sm={6} m d={4}>
            <Fade in>
              <Link color="primary" to={`/products/${id}`}>
                <Card>
                  <CardHeader title={title} />
                  <CardContent>
                    <CardMedia
                      component="img"
                      sx={{
                        objectFit: "contain",
                        maxHeight: "10rem",
                      }}
                      image={image}
                      alt={title}
                    />
                  </CardContent>
                </Card>
              </Link>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
