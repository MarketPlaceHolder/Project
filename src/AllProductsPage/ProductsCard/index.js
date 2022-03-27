import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import CardMedia from "./CardMedia";

export default function ProductsCard({ title, image, category, id }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 200,
        boxShadow: "2px 2px 5px #aaa",
        backgroundColor: "#eee",
      }}
    >
      <CardActionArea>
        <CardMedia src={image}></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category : {category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/products/${id}`}>
          <Button size="small" color="primary">
            See details...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
