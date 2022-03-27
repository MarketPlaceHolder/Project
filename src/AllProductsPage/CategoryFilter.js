import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CategoryFilter = ({
  products,
  setSelectedCategory,
  selectedCategory,
}) => {
  const categories = [...new Set(products.map((product) => product.category))];

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          value={selectedCategory}
          onChange={handleChange}
        >
          <MenuItem value="all">All categories</MenuItem>
          {categories.map((category, key) => (
            <MenuItem key={key} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default CategoryFilter;
