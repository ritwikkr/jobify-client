import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Wrapper from "../styles/DashboardStyle";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <Wrapper>
      <div className="flex">
        <Sidebar />
        <div className="body">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
}

export default Dashboard;
