import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Wrapper from "../styles/NavbarStyle";
import {
  showSidebar,
  hideSidebar,
} from "../context/slices/collapseSidebarSlice";
import { logoutUser } from "../context/slices/userSlice";
import logo from "../assets/logo.svg";

function Navbar() {
  // Component State
  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutHandler() {
    dispatch(logoutUser());
    navigate("/");
  }

  // Side Effect -> Resize window
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1000) {
        dispatch(hideSidebar());
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="menu" onClick={() => dispatch(showSidebar())}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="title">
        <h1>Dashboard</h1>
        <div className="hide">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="profile" onClick={() => setShowDropdown(!showDropdown)}>
        <i className="fa-solid fa-user"></i>
        <p>John</p>
        <i className="fa-solid fa-caret-down"></i>
        <div
          className={`dropdown ${!showDropdown && `show`}`}
          onClick={() => logoutHandler()}
        >
          <p>Logout</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
