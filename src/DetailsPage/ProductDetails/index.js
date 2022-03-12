import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import useProduct from "../../common/hooks/useProduct";

export default function ProductDetails() {
  const { title, description, image, category, price, rate } = useProduct();

  const [qty, setQty] = useState(0);
  const addProductToCart = () => {
    console.log(qty);
  };

  return (
    <Card sx={{ boxShadow: "none" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "> *": {
            flex: 1,
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            objectFit: "contain",
            padding: 2,
            maxWidth: "100%",
            maxHeight: "60vh",
          }}
          image={image}
          alt={title}
        />
        <div className="wrapper">
          <CardHeader title={title} subheader={category} />
          <CardContent>
            <Typography variant="body2" my={2}>
              {description}
            </Typography>
            {rate && (
              <Rating name="half-rating-read" value={rate} precision={0.5} />
            )}
            <Box marginBottom={2}>
              Prix :
              <Typography
                variant="h6"
                component="span"
                ml={1}
                color={"primary.main"}
              >
                {price}€
              </Typography>
            </Box>
            <TextField
              label="Quantité"
              type="number"
              variant="standard"
              size="small"
              onChange={(e) => setQty(e.target.value)}
              sx={{
                width: "6rem",
              }}
            />
          </CardContent>
          <CardActions sx={{ paddingX: 2 }}>
            <Button variant="contained" onClick={() => addProductToCart()}>
              Ajouter au panier
            </Button>
          </CardActions>
        </div>
      </Box>
    </Card>
  );
}
