import { Box } from "@mui/material";
import IpData from "components/IpData";
import MapComponent from "components/MapComponent";
import SearchInput from "components/SearchInput";
import Title from "components/Title";
import IpDataProvider from "providers/ipDataProvider";
import React from "react";
import { SearchSection } from "./components";

const SearchPage: React.FC = () => {
  
  return (
    <IpDataProvider>
      <SearchSection>
        <Title />
        <SearchInput />
      </SearchSection>
      <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center', position: 'absolute', zIndex: '2' }}>
        <IpData />
      </Box>
      <MapComponent />
    </IpDataProvider>
  );
};

export default SearchPage;
