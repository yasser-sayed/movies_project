import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  popSeries: [],
  popSLoading: false,
  popSErr: null,
  topSeries: [],
  topSLoading: false,
  topSErr: null,
};

//popular series axios
export const getPopularSeries = createAsyncThunk(
  "getPopularSeries",
  async (NU, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const popSeriesData = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/popular",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return popSeriesData.data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

//top series axios
export const getTopSeries = createAsyncThunk(
  "getTopSeries",
  async (NU, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const topSeriesData = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/top_rated",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return topSeriesData.data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

const homeSeriesSlice = createSlice({
  name: "homeSeries",
  initialState: data,
  extraReducers: (builder) => {
    //popular series handler
    builder.addCase(getPopularSeries.pending, (state) => {
      state.popSLoading = true;
    });

    builder.addCase(getPopularSeries.fulfilled, (state, { payload }) => {
      state.popSLoading = false;
      state.popSeries = payload;
    });

    builder.addCase(getPopularSeries.rejected, (state, { payload }) => {
      state.popSLoading = false;
      state.popSErr = payload;
    });

    //top series handler
    builder.addCase(getTopSeries.pending, (state) => {
      state.topSLoading = true;
    });

    builder.addCase(getTopSeries.fulfilled, (state, { payload }) => {
      state.topSLoading = false;
      state.topSeries = payload;
    });

    builder.addCase(getTopSeries.rejected, (state, { payload }) => {
      state.topSLoading = false;
      state.topSErr = payload;
    });
  },
});

export const homeSeries = homeSeriesSlice.reducer;
