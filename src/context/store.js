import { configureStore } from "@reduxjs/toolkit";

import alertReducer from "./slices/alertSlice";
import userReducer from "./slices/userSlice";
import showSidebarReducer from "./slices/collapseSidebarSlice";
import jobReducer from "./slices/jobSlice";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    user: userReducer,
    sidebar: showSidebarReducer,
    job: jobReducer,
  },
});

export default store;
