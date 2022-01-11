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
        <Box sx={{ width: '90%', display: 'flex', justifyContent: 'center', zIndex: '2' }}>
          <IpData />
        </Box>
      </SearchSection>
      <MapComponent />
    </IpDataProvider>
  );
};

export default SearchPage;
