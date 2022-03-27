import React from "react";
import { Link } from "react-router-dom";
import AppCarousel from "./Carousel";
import { Button } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <AppCarousel />
      <Link to="/products">
        <Button
          variant="contained"
          sx={{ display: "block", textAlign: "center", margin: "auto" }}
        >
          Voir tous les produits
        </Button>
      </Link>
    </>
  );
}
