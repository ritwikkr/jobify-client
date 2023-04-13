import React, { useEffect, useState } from "react";
import Wrapper from "../styles/SearchFormStyle";

function SearchForm({ onData }) {
  // Component State
  const [searchDetails, setSearchDetails] = useState({
    text: "",
    status: "all",
    type: "all",
    sort: "latest",
  });

  // Clear Form Handler
  function clearHandler(e) {
    e.preventDefault();
    setSearchDetails({ text: "", status: "all", type: "all", sort: "latest" });
  }

  useEffect(() => {
    onData(searchDetails);
  }, [searchDetails, onData]);

  return (
    <Wrapper>
      <div className="title">
        <p>Search Form</p>
      </div>
      <div className="body">
        <form onSubmit={clearHandler}>
          <div className="top">
            <div className="form-content">
              <label htmlFor="search">Search</label>
              <input
                type="text"
                id="search"
                value={searchDetails.text}
                onChange={(e) =>
                  setSearchDetails({ ...searchDetails, text: e.target.value })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                id="status"
                value={searchDetails.status}
                onChange={(e) =>
                  setSearchDetails({ ...searchDetails, status: e.target.value })
                }
              >
                <option value="all">All</option>
                <option value="interview">interview</option>
                <option value="declined">declined</option>
                <option value="pending">pending</option>
              </select>
            </div>
            <div className="form-content">
              <label htmlFor="type">Type</label>
              <select
                name="type"
                id="type"
                value={searchDetails.type}
                onChange={(e) =>
                  setSearchDetails({ ...searchDetails, type: e.target.value })
                }
              >
                <option value="all">all</option>
                <option value="full-time">full-time</option>
                <option value="part-time">part-time</option>
                <option value="remote">remote</option>
                <option value="internship">internship</option>
              </select>
            </div>
          </div>
          <div className="bottom">
            <div className="form-content">
              <label htmlFor="sort">Sort</label>
              <select
                name="sort"
                id="sort"
                value={searchDetails.sort}
                onChange={(e) =>
                  setSearchDetails({ ...searchDetails, sort: e.target.value })
                }
              >
                <option value="latest">latest</option>
                <option value="oldest">oldest</option>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
              </select>
            </div>
            <div className="form-content">
              <button>Clear Filters</button>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default SearchForm;
