import { createSlice } from "@reduxjs/toolkit";
// import

const alertSlice = createSlice({
  name: "alertSlice",
  initialState: {
    show: false,
    alertMsg: "",
    alertType: "",
  },
  reducers: {
    showAlert: (state, action) => {
      state.show = true;
      state.alertMsg = action.payload.alertMsg;
      state.alertType = action.payload.alertType;
    },
    clearAlert: (state) => {
      state.show = false;
      state.alertMsg = "";
      state.alertType = "";
    },
  },
});

export const { showAlert, clearAlert } = alertSlice.actions;
export default alertSlice.reducer;
