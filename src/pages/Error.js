import React from "react";
import { Link } from "react-router-dom";

import notFound from "../assets/not-found.svg";
import Wrapper from "../styles/ErrorStyle";

function Error() {
  return (
    <Wrapper>
      <img src={notFound} alt="page not found" />
      <div className="info">
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to fing the page that you are looking for</p>
        <Link to={"/"}>Back Home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
