import IpData from "components/IpData";
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
      <IpData />
      {/* <Map /> */}
    </IpDataProvider>
  );
};

export default SearchPage;
