import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "../styles/JobsStyle";
import JobCard from "./JobCard";
import { fetchJobs } from "../context/slices/jobSlice";

function Jobs({ text, status, type, sort }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.job);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchJobs(user.data._id));
  }, [dispatch, user]);

  if (data.isLoading === true) {
    return <h1>Please wait123</h1>;
  }

  return (
    <Wrapper>
      <div className="head">
        <p>
          {data.job.filter((item) => item.company === text).length} Jobs Found
        </p>
      </div>
      <div className="body">
        {data.job
          .filter((item) => {
            return item.company.toLowerCase().includes(text.toLowerCase());
          })
          .map((item) => (
            <JobCard key={item._id} {...item} />
          ))}
      </div>
    </Wrapper>
  );
}

export default Jobs;
