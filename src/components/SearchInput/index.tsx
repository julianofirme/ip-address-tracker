import React from "react";
import { Box, IconButton, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput: React.FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <OutlinedInput
        sx={{ background: "#fff", borderRadius: "14px 0 0 14px", width: "420px" }}
        placeholder="Search for any IP address"
        inputProps={{ "aria-label": "search ip address" }}
      />
      <IconButton type="submit" aria-label="search ip address" sx={{ p: 0 }}>
        <Box
          sx={{
            p: "10px",
            background: "#000",
            height: "56px",
            borderRadius: " 0 14px 14px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchIcon sx={{ fill: "#FFF" }} />
        </Box>
      </IconButton>
    </Box>
  );
};

export default SearchInput;
