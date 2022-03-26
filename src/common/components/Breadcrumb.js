//TODO Breadcrumb
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link } from "@mui/material";
import { styled } from "@mui/system";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const LinkRouter = (props) => <Link {...props} component={RouterLink}></Link>;
const Breadcrumb = styled("div")({
  margin: "20px",
});

export default () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/");
  const displayPath = (path, key) => {
    const to = `${pathnames.slice(0, key + 1).join("/")}`;
    if (key === 0) {
      return (
        <LinkRouter key={key} underline="hover" color="inherit" to="/">
          Home
        </LinkRouter>
      );
    }
    if (key === pathnames.length - 1) {
      return (
        <Typography key={key} color="text.primary">
          {path}
        </Typography>
      );
    }
    return (
      <LinkRouter key={key} underline="hover" color="inherit" to={to}>
        {path}
      </LinkRouter>
    );
  };
  return (
    <Breadcrumb role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {pathnames.map(displayPath)}
      </Breadcrumbs>
    </Breadcrumb>
  );
};
