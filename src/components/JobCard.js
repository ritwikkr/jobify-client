import React from "react";
import { useDispatch } from "react-redux";

import Wrapper from "../styles/JobCardStyle";
import { deleteJobs } from "../context/slices/jobSlice";

function JobCard({ position, company, location, status, type, _id }) {
  const dispatch = useDispatch();
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
            <p>{status}</p>
          </div>
        </div>
        <div className="buttons">
          <button>Edit</button>
          <button onClick={() => dispatch(deleteJobs(_id))}>Delete</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default JobCard;
