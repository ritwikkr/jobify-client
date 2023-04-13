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
  },
});

export const { showSidebar } = collapseSidebar.actions;
export default collapseSidebar.reducer;
