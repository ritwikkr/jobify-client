import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "../styles/JobsStyle";
import JobCard from "./JobCard";
import { fetchJobs } from "../context/slices/jobSlice";

function Jobs() {
  const dispatch = useDispatch();
  const { isLoading, job } = useSelector((state) => state.job);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchJobs(user.data._id));
  }, [dispatch, user]);

  if (isLoading) {
    return <h1>Please wait</h1>;
  }

  return (
    <Wrapper>
      <div className="head">
        <p>{job.length} Jobs Found</p>
      </div>
      <div className="body">
        {job.map((item) => (
          <JobCard key={item._id} {...item} />
        ))}
      </div>
    </Wrapper>
  );
}

export default Jobs;
