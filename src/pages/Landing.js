import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import main from "../assets/main.svg";
import Wrapper from "../styles/LandingStyle";

function Landing() {
  return (
    <Wrapper>
      <div className="content">
        <div className="head">
          <img src={logo} alt="logo" />
        </div>
        <div className="body">
          <div className="info">
            <h1>
              Job <span>Tracking</span> App
            </h1>
            <p>
              Welcome to Jobify, the ultimate MERN Stack website for effortless
              job record management. Create, track, and edit job listings with
              secure login/register functionality. Streamline your job
              management process with Jobify.
            </p>
            <Link to={"/register"}>
              <button>Login / Register</button>
            </Link>
          </div>
          <div className="image">
            <img src={main} alt="main" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Landing;
