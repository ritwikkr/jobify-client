import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import BASE_URL from "../../utils/BASE_URL";

export const createJob = createAsyncThunk(
  "createJob",
  async (jobDetails, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/jobs/create`, jobDetails);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchJobs = createAsyncThunk("fetchJobs", async (userId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/jobs/${userId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteJobs = createAsyncThunk("deleteJobs", async (jobId) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/jobs/${jobId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchJob = createAsyncThunk("fetchJob", async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/jobs/job/${id}`);
    return data;
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
    singleJob: null,
    jobId: null,
  },
  reducers: {
    clearJobCreated: (state, action) => {
      state.jobCreated = false;
    },
    toggleIsLoading: (state, action) => {
      state.isLoading = false;
    },
    editJobId: (state, action) => {
      state.jobId = action.payload;
    },
  },
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

    // Fetch Jobs
    builder.addCase(fetchJobs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.job = action.payload;
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.isError = true;
    });
    builder.addCase(deleteJobs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.job = state.job.filter((item) => item._id !== action.payload._id);
    });
    builder.addCase(fetchJob.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJob.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleJob = action.payload;
    });
    builder.addCase(fetchJob.rejected, (state, action) => {});
  },
});

export const { clearJobCreated, toggleIsLoading, editJobId } = jobSlice.actions;
export default jobSlice.reducer;
