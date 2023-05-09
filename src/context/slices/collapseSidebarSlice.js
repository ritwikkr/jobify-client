import { createSlice } from "@reduxjs/toolkit";

const collapseSidebar = createSlice({
  name: "sidebar",
  initialState: {
    displaySidebar: true,
  },
  reducers: {
    showSidebar: (state) => {
      state.displaySidebar = !state.displaySidebar;
    },
    hideSidebar: (state) => {
      state.displaySidebar = false;
    },
  },
});

export const { showSidebar, hideSidebar } = collapseSidebar.actions;
export default collapseSidebar.reducer;
