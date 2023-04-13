import React, { useState } from "react";
import { useSelector } from "react-redux";

import Wrapper from "../styles/SidebarStyle";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState(1);
  const { displaySidebar } = useSelector((state) => state.sidebar);

  return (
    <Wrapper>
      <div className={`show ${!displaySidebar && `hide`} `}>
        <div className="head">
          <img src={logo} alt="logo" />
        </div>
        <div className="body">
          <ul>
            <Link to={"/dashboard"}>
              <li
                className={active === 1 ? `active` : null}
                onClick={() => setActive(1)}
              >
                <i className="fa-solid fa-chart-column"></i>
                <p>Stats</p>
              </li>
            </Link>
            <Link to={"/dashboard/all-jobs"}>
              <li
                className={active === 2 ? `active` : null}
                onClick={() => setActive(2)}
              >
                <i className="fa-solid fa-chart-line"></i>
                <p>All Jobs</p>
              </li>
            </Link>
            <Link to={"/dashboard/add-job"}>
              <li
                className={active === 3 ? `active` : null}
                onClick={() => setActive(3)}
              >
                <i className="fa-solid fa-file-lines"></i>
                <p>Add Job</p>
              </li>
            </Link>
            <Link to={"/dashboard/profile"}>
              <li
                className={active === 4 ? `active` : null}
                onClick={() => setActive(4)}
              >
                <i className="fa-solid fa-image-portrait"></i>
                <p>Profile</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

export default Sidebar;
