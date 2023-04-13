import React from "react";
import Wrapper from "../styles/DashboardBodyStyle";
import DashboardCard from "./DashboardCard";

const rit = [
  {
    name: "Pending Applications",
    count: 1,
    icon: "fa-solid fa-briefcase",
    bgColor: "rgb(250,235,192)",
    color: "rgb(228,174,58)",
  },
  {
    name: "Interview Scheduled",
    count: 1,
    icon: "fa-solid fa-calendar-check",
    bgColor: "rgb(217,229,244)",
    color: "rgb(89,110,194)",
  },
  {
    name: "Jobs Declined",
    count: 0,
    icon: "fa-solid fa-bug",
    bgColor: "rgb(253,235,232)",
    color: "rgb(206,94,94)",
  },
];

function DashboardBody() {
  return (
    <Wrapper>
      {rit.map((item, index) => (
        <DashboardCard {...item} key={index} />
      ))}
    </Wrapper>
  );
}

export default DashboardBody;
