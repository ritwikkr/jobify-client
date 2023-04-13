import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import main from "../assets/main.svg";
import Wrapper from "../styles/LandingStyle";

function Landing() {
  return (
    <Wrapper>
      <div className="head">
        <img src={logo} alt="logo" />
      </div>
      <div className="body">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            repellat dolorem deserunt atque. Deleniti officia nobis laboriosam
            tenetur, praesentium non veniam est ullam, amet repellendus facilis
          </p>
          <Link to={"/register"}>
            <button>Login / Register</button>
          </Link>
        </div>
        <div className="image">
          <img src={main} alt="main" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Landing;
