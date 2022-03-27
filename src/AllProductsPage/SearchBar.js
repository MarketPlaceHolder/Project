import * as React from "react";
import TextField from "@mui/material/TextField";

export default ({ setInput }) => {
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
