import SearchInput from "components/SearchInput";
import Title from "components/Title";
import React from "react";
import { SearchSection } from "./components";

const SearchPage: React.FC = () => {
  return (
    <>
      <SearchSection>
        <Title />
        <SearchInput />
      </SearchSection>
      {/* <IpData /> */}
      {/* <Map /> */}
    </>
  );
};

export default SearchPage;
