import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CancelIcon from "@mui/icons-material/Cancel";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";
import { Box } from "@mui/system";

export default function Cart() {
  const [open, setOpen] = useState(false);
  const { cart, nbItems, totalPrice, removeFromCart, clearCart } =
    useContext(CartContext);

  useEffect(() => {
    nbItems > 0 || setOpen(false);
  }, [nbItems]);

  return (
    <>
      <IconButton
        size="large"
        color="primary"
        onClick={() => nbItems > 0 && setOpen(true)}
      >
        <Badge badgeContent={nbItems} color="success">
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </IconButton>
      <Dialog
        open={open}
        onBackdropClick={() => {
          setOpen(false);
        }}
        fullWidth={true}
        maxWidth={"lg"}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "60vh",
          }}
        >
          <CardHeader avatar={<ShoppingCartIcon />} title="Votre panier" />
          <CardContent sx={{ overflowY: "scroll" }}>
            <List>
              {cart.map(({ id, title, qty, image, price }) => (
                <ListItem
                  dense
                  divider
                  key={id}
                  secondaryAction={
                    <IconButton onClick={() => removeFromCart({ id })}>
                      <CancelIcon color="error" />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar
                      src={image}
                      alt=""
                      variant="square"
                      sx={{ img: { objectFit: "contain" } }}
                    />
                  </ListItemAvatar>
                  <ListItemText>
                    <div>{title}</div>
                    <div>{price.toFixed(2)}€</div>
                    <div>Quantité : {qty}</div>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </CardContent>
          <Box
            p={2}
            sx={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "end",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => clearCart()}
            >
              Vider le panier
            </Button>
            <Box>
              Prix :
              <Typography
                variant="h6"
                component="span"
                ml={1}
                color={"primary.main"}
              >
                {totalPrice.toFixed(2)}€
              </Typography>
            </Box>
          </Box>
        </Card>
      </Dialog>
    </>
  );
}
