import React, { useState } from "react";
import Wrapper from "../styles/AllJobs";
import Jobs from "./Jobs";
// import SearchForm from "./SearchForm";

function AllJobs() {
  // Component State
  const [searchDetails] = useState({});

  // function searchTerm(search) {
  //   setSearchDetails(search);
  // }
  return (
    <Wrapper>
      {/* Search Functionality */}
      {/* <SearchForm onData={searchTerm} /> */}
      <Jobs {...searchDetails} />
    </Wrapper>
  );
}

export default AllJobs;
