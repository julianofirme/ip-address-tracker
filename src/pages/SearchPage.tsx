import { Box } from "@mui/material";
import SearchInput from "components/SearchInput";
import Title from "components/Title";
import React from "react";

const SearchPage: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "250px",
          display: "flex", 
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
          backgroundImage: `url(https://i.ibb.co/4YyyJwj/pattern-Bg.png`,
        }}
      >
        <Title />
        <SearchInput />
      </Box>
      {/* <IpData /> */}
      {/* <Map /> */}
    </>
  );
};

export default SearchPage;
