import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Wrapper from "../styles/JobCardStyle";
import { deleteJobs, editJobId } from "../context/slices/jobSlice";
import Status from "./Status";

function JobCard({ position, company, location, status, type, _id }) {
  const dispatch = useDispatch();

  function setEditJobId(id) {
    dispatch(editJobId(id));
  }
  return (
    <Wrapper>
      <div className="title">
        <div className="left">
          <p>{company.charAt(0)}</p>
        </div>
        <div className="right">
          <p>{position}</p>
          <p className="company">{company}</p>
        </div>
      </div>
      <hr />
      <div className="body">
        <div className="top">
          <div className="location">
            <i className="fa-solid fa-location-arrow"></i>
            <p>{location}</p>
          </div>
          <div className="date">
            <i className="fa-solid fa-calendar-days"></i>
            <p>Dec, 27th, 2021</p>
          </div>
        </div>
        <div className="bottom">
          <div className="type">
            <i className="fa-solid fa-briefcase"></i>
            <p>{type}</p>
          </div>
          <div className="status">
            <Status status={status} />
          </div>
        </div>
        <div className="buttons">
          <Link to={`/dashboard/add-job`}>
            <button onClick={() => setEditJobId(_id)}>Edit</button>
          </Link>
          <button onClick={() => dispatch(deleteJobs(_id))}>Delete</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default JobCard;
