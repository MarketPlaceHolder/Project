import {
  Button,
  CardMedia,
  Grid,
  Rating,
  TextField,
  Typography,
  Fade,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { CartContext } from "../../App";

export default function ProductDetails({ product }) {
  const {
    title,
    description,
    image,
    category,
    price,
    rating: { rate },
  } = product;
  const [qty, setQty] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCard = () => {
    addToCart(product, qty);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={3}>
      <Grid item xs={12} md={4}>
        <Fade in>
          <CardMedia
            component="img"
            sx={{
              objectFit: "contain",
              maxHeight: "50vh",
            }}
            image={image}
            alt={title}
          />
        </Fade>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1">{category}</Typography>
        <Typography variant="body2" my={2}>
          {description}
        </Typography>
        {rate && (
          <Rating
            name="half-rating-read"
            value={rate}
            precision={0.5}
            readOnly
          />
        )}
        <Box marginBottom={2}>
          Prix :
          <Typography
            variant="h6"
            component="span"
            ml={1}
            color={"primary.main"}
          >
            {price.toFixed(2)}€
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
            marginBottom: 2,
          }}
        />
        <Button
          sx={{
            display: "block",
          }}
          variant="contained"
          onClick={() => handleAddToCard()}
        >
          Ajouter au panier
        </Button>
      </Grid>
    </Grid>
  );
}
