import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Wrapper from "../styles/AlertStyle";
import { clearAlert } from "../context/slices/alertSlice";

function Alert() {
  // Global State (Redux)
  const { alertType, alertMsg, show } = useSelector((state) => state.alert);

  // Side effect
  const dispatch = useDispatch();
  useEffect(() => {
    if (show) {
      const timeoutId = setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [dispatch, show]);

  return (
    <Wrapper>
      <div className={alertType}>
        <p>{alertMsg}</p>
      </div>
    </Wrapper>
  );
}

export default Alert;
