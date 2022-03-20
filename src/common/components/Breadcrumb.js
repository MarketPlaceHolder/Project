//TODO Breadcrumb
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const LinkRouter = (props) => <Link {...props} component={RouterLink}></Link>;

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/");
  const displayPath = (path, key) => {
    const to = `${pathnames.slice(0, key + 1).join("/")}`;
    if (key === 0) {
      return (
        <LinkRouter underline="hover" color="inherit" to="/">
          Home
        </LinkRouter>
      );
    }
    if (key === pathnames.length - 1) {
      return <Typography color="text.primary">{path}</Typography>;
    }
    return (
      <LinkRouter underline="hover" color="inherit" to={to}>
        {path}
      </LinkRouter>
    );
  };
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {pathnames.map(displayPath)}
      </Breadcrumbs>
    </div>
  );
}