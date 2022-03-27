import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default ({ input, setInput }) => {
  const onchange = (event) => {
    setInput(event.target.value);
  };
  return (
    <TextField
      id="outlined-basic"
      label="Search"
      variant="outlined"
      onChange={onchange}
    />
  );
};
