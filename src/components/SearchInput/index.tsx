import React, { useContext, useState } from "react";
import { Box, Button, IconButton, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ipDataContext } from "providers/ipDataProvider";

const SearchInput: React.FC = () => {
  const { setIpAddress } = useContext(ipDataContext);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: any) => {
    const {
      target: { value }
    } = event

    setInputValue(value)
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <OutlinedInput
        sx={{
          background: "#fff",
          borderRadius: "14px 0 0 14px",
          width: "420px",
        }}
        placeholder="Search for any IP address"
        inputProps={{ "aria-label": "search ip address" }}
        onChange={handleChange}
      />
      <IconButton
        aria-label="search ip address"
        sx={{ p: 0 }}
        onClick={() => setIpAddress(inputValue)}
      >
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
