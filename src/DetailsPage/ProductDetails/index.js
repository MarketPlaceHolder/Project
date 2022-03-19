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
import useCart from "../../common/hooks/useCart";

export default function ProductDetails({
  product: { id, title, description, image, category, price, rate },
}) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCard = () => {
    addToCart(id, qty);
  };

  return (
    <Card sx={{ boxShadow: "none" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
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
            maxWidth: "clamp(16rem, 40%, 100%)",
            maxHeight: "50vh",
            flexGrow: 0,
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
              defaultValue={qty}
              size="small"
              onChange={(e) => setQty(e.target.value)}
              sx={{
                width: "6rem",
              }}
            />
          </CardContent>
          <CardActions sx={{ paddingX: 2 }}>
            <Button variant="contained" onClick={() => handleAddToCard()}>
              Ajouter au panier
            </Button>
          </CardActions>
        </div>
      </Box>
    </Card>
  );
}
