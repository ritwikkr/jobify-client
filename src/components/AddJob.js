import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Wrapper from "../styles/ProfileStyle";
import Wrapper2 from "../styles/AddJobStyle";
import Alert from "./Alert";
import {
  createJob,
  clearJobCreated,
  fetchJob,
  toggleIsLoading,
} from "../context/slices/jobSlice";
import { showAlert } from "../context/slices/alertSlice";

function AddJob() {
  // Global State (Redux)
  const dispatch = useDispatch();
  const { jobCreated, singleJob, isLoading } = useSelector(
    (state) => state.job
  );
  const { user } = useSelector((state) => state.user);

  // State
  const [jobDetails, setJobDetails] = useState({
    position: singleJob ? singleJob.position : "",
    company: singleJob ? singleJob.company : "",
    location: singleJob ? singleJob.location : "",
    status: singleJob ? singleJob.status : "pending",
    type: singleJob ? singleJob.type : "full-time",
  });

  // Side Effect -> Success Handler
  useEffect(() => {
    if (jobCreated) {
      dispatch(
        showAlert({ alertType: "success", alertMsg: "Job Successfully Added" })
      );
      dispatch(clearJobCreated());
    }
  }, [dispatch, jobCreated]);

  // Side Effect -> Get Job Details via id
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(fetchJob(id));
    } else {
      dispatch(toggleIsLoading());
    }
  }, [dispatch, id]);

  // Submit Handler
  function submitFormHandler(e) {
    e.preventDefault();
    const { position, company, location, status, type } = jobDetails;
    if (!position || !company || !location || !status || !type) {
      return dispatch(
        showAlert({ alertType: "error", alertMsg: "Please provide all values" })
      );
    }
    dispatch(createJob({ jobDetails, id: user.data._id }));
    clearFormHandler(e);
  }

  // Clear Form Handler
  function clearFormHandler(e) {
    e.preventDefault();
    setJobDetails({
      position: "",
      company: "",
      location: "",
      status: "pending",
      type: "full-time",
    });
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Wrapper>
      <div className="body">
        <div className="title">
          <Alert />
          <p>Add Job</p>
        </div>
        <div className="content">
          <form>
            <div className="top">
              <div className="form-content">
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  id="position"
                  value={jobDetails.position}
                  onChange={(e) =>
                    setJobDetails({ ...jobDetails, position: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  value={jobDetails.company}
                  onChange={(e) =>
                    setJobDetails({ ...jobDetails, company: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="location">Location</label>
                <input
                  type="location"
                  id="location"
                  value={jobDetails.location}
                  onChange={(e) =>
                    setJobDetails({ ...jobDetails, location: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="bottom">
              <Wrapper2>
                <div className="form-content">
                  <label htmlFor="status">Status</label>
                  <select
                    name="status"
                    id="status"
                    // value={jobDetails.status}
                    defaultValue={"pending"}
                    onChange={(e) =>
                      setJobDetails({ ...jobDetails, status: e.target.value })
                    }
                  >
                    <option value="pending">Pending</option>
                    <option value="declined">Declined</option>
                    <option value="interview">Interview</option>
                  </select>
                </div>
                <div className="form-content">
                  <label htmlFor="type">Type</label>
                  <select
                    name="type"
                    id="type"
                    // value={jobDetails.type}
                    defaultValue={"full-time"}
                    onChange={(e) =>
                      setJobDetails({ ...jobDetails, type: e.target.value })
                    }
                  >
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
                <div className="form-content btn">
                  <button type="submit" onClick={submitFormHandler}>
                    Submit
                  </button>
                  <button onClick={clearFormHandler}>Clear</button>
                </div>
              </Wrapper2>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default AddJob;
