//TODO Breadcrumb
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const Navigation = styled("nav")({ border: " 1px solid blue" });

export default () => (
  <Navigation>
    <Link to="/">Home</Link>
    <Link to="/products">All products</Link>
    <Link to="/products/1">1st product</Link>
    <Link to="/products/7">7th Product</Link>
  </Navigation>
);
