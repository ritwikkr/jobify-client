import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import Alert from "../components/Alert";
import Wrapper from "../styles/RegisterStyle";
import { showAlert } from "../context/slices/alertSlice";
import { registerUser, loginUser } from "../context/slices/userSlice";

function Register() {
  // Component State
  const [showRegister, setShowRegister] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Global State (Redux)
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.alert);
  const { user, isError, errorMsg } = useSelector((state) => state.user);

  // Side Effects
  // Success Handler
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      dispatch(
        showAlert({
          alertType: "success",
          alertMsg: "Authenticating Successfull... Redirecting...",
        })
      );
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
  }, [user, navigate, dispatch]);

  // Error Handler
  useEffect(() => {
    if (isError) {
      dispatch(showAlert({ alertType: "error", alertMsg: errorMsg }));
    }
  }, [isError, dispatch, errorMsg]);

  // Submit Handler
  function formSubmitHandler(e) {
    e.preventDefault();
    if (showRegister) {
      dispatch(registerUser(userDetails));
    } else {
      dispatch(loginUser(userDetails));
    }
  }

  return (
    <Wrapper>
      <div className="content">
        <div className="heading">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="login">
            {showRegister ? <p>Register</p> : <p>Login</p>}
          </div>
        </div>
        {show && <Alert />}
        <form onSubmit={formSubmitHandler}>
          {showRegister && (
            <div className="form-content">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
              />
            </div>
          )}
          <div className="form-content">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
            />
          </div>
          <div className="form-content">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
            />
          </div>
          {showRegister && (
            <div className="form-content">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
          )}
          <div className="form-content">
            <button type="submit">Submit</button>
          </div>
          <div className="form-content">
            {showRegister ? (
              <p>
                Already a member?
                <span onClick={() => setShowRegister(!showRegister)}>
                  Login
                </span>
              </p>
            ) : (
              <p>
                Not a member yet?
                <span onClick={() => setShowRegister(!showRegister)}>
                  Register
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default Register;
