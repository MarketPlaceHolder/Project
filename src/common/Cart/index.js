import { Badge, Dialog, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useContext, useState } from "react";
import { CartContext } from "../../App";

export default function Cart() {
  const [open, setOpen] = useState(false);
  const { cart, nbItems } = useContext(CartContext);

  return (
    <>
      <IconButton size="large" color="primary" onClick={() => setOpen(true)}>
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
        {cart.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </Dialog>
    </>
  );
}
