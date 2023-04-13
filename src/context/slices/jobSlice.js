import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import BASE_URL from "../../utils/BASE_URL";

export const createJob = createAsyncThunk(
  "createJob",
  async (jobDetails, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/v1/jobs/create`, jobDetails);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchJobs = createAsyncThunk("fetchJobs", async (userId) => {
  try {
    const { data } = await axios.get(`/api/v1/jobs/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteJobs = createAsyncThunk("deleteJobs", async (jobId) => {
  try {
    const { data } = await axios.delete(`/api/v1/jobs/${jobId}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

const jobSlice = createSlice({
  name: "job",
  initialState: {
    isLoading: true,
    job: null,
    jobCreated: false,
    isError: false,
    errorMsg: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createJob.pending, (state, action) => {
      state.isLoading = true;
      state.jobCreated = false;
    });
    builder.addCase(createJob.fulfilled, (state, action) => {
      state.isLoading = false;
      state.jobCreated = true;
    });
    builder.addCase(createJob.rejected, (state, action) => {
      state.isError = true;
      state.errorMsg = action.payload;
    });

    builder.addCase(fetchJobs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.job = action.payload;
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.isError = true;
      console.log(action.payload);
    });
  },
});

export default jobSlice.reducer;
