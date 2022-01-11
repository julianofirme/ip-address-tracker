import { Box } from "@mui/material";
import IpData from "components/IpData";
import MapComponent from "components/MapComponent";
import SearchInput from "components/SearchInput";
import Title from "components/Title";
import IpDataProvider from "providers/ipDataProvider";
import React from "react";
import { Container, SearchSection } from "./components";

const SearchPage: React.FC = () => {

  return (
    <IpDataProvider>
      <Container>
        <SearchSection>
          <Title />
          <SearchInput />
          <Box sx={{ width: '90%', display: 'flex', justifyContent: 'center', zIndex: '2' }}>
            <IpData />
          </Box>
        </SearchSection>
        <MapComponent />
      </Container>
    </IpDataProvider>
  );
};

export default SearchPage;
