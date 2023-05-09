import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Wrapper from "../styles/ProfileStyle";
import { updateUser } from "../context/slices/userSlice";
import Alert from "./Alert";
import { showAlert } from "../context/slices/alertSlice";

function Profile() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // Component State
  const [userDetails, setUserDetails] = useState({
    firstName: user ? user.data.firstName : "",
    lastName: user ? user.data.lastName : "",
    email: user ? user.data.email : "",
    location: user ? user.data.location : "",
  });

  function submitFormHandler(e) {
    e.preventDefault();
    dispatch(
      showAlert({ alertType: "success", alertMsg: "Updating... Please Wait" })
    );
    dispatch(updateUser(userDetails));
  }
  return (
    <Wrapper>
      <div className="body">
        <div className="title">
          <Alert />
          <p>Profile</p>
        </div>
        <div className="content">
          <form onSubmit={submitFormHandler}>
            <div className="top">
              <div className="form-content">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={userDetails.firstName}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="l-name">Last Name</label>
                <input
                  type="text"
                  id="l-name"
                  value={userDetails.lastName}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, lastName: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="bottom">
              <div className="form-content">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  value={userDetails.location}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, location: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <button>Save Changes</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Profile;
