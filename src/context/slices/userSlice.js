import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import BASE_URL from "../../utils/BASE_URL";

export const registerUser = createAsyncThunk(
  "registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/user/register`, userData);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/user/login`, userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUser = createAsyncThunk("updateUser", async (userData) => {
  try {
    const { data } = await axios.put(`${BASE_URL}/user/update`, userData);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoading: false,
    isError: false,
    errorMsg: "",
  },
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    // Register User
    builder.addCase(registerUser.pending, (state, action) => {
      state.user = null;
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = "";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.errorMsg = "";
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.user = null;
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.payload;
    });

    // Login User
    builder.addCase(loginUser.pending, (state, action) => {
      state.user = null;
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = "";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.errorMsg = "";
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.user = null;
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.payload;
    });

    // Update User
    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.user = null;
      state.isError = true;
      state.errorMsg = action.payload;
    });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
