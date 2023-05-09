import React, { useEffect } from "react";
import Wrapper from "../styles/StatsStyle";
import DashboardCard from "./DashboardCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../context/slices/jobSlice";

function Stats() {
  // Redux
  const { job, isLoading } = useSelector((state) => state.job);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Side Effect
  useEffect(() => {
    dispatch(fetchJobs(user.data._id));
  }, [dispatch, user]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const pending = job.reduce((acc, item) => {
    if (item.status === "pending") {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);

  const declined = job.reduce((acc, item) => {
    if (item.status === "declined") {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);

  const interview = job.reduce((acc, item) => {
    if (item.status === "interview") {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);
  const arr = [
    {
      name: "Pending Applications",
      count: pending,
      icon: "fa-solid fa-briefcase",
      bgColor: "rgb(250,235,192)",
      color: "rgb(228,174,58)",
    },
    {
      name: "Interview Scheduled",
      count: interview,
      icon: "fa-solid fa-calendar-check",
      bgColor: "rgb(217,229,244)",
      color: "rgb(89,110,194)",
    },
    {
      name: "Jobs Declined",
      count: declined,
      icon: "fa-solid fa-bug",
      bgColor: "rgb(253,235,232)",
      color: "rgb(206,94,94)",
    },
  ];
  return (
    <Wrapper>
      {arr.map((item, index) => (
        <DashboardCard {...item} key={index} />
      ))}
    </Wrapper>
  );
}

export default Stats;
