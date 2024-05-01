import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  popSeries: [],
  popSLoading: false,
  popSErr: null,
};

export const getPopSeries = createAsyncThunk(
  "getPopSeries",
  async (pageNum = 1, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const popSeriesData = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/popular",
        params: { language: "en-US", page: `${pageNum}` },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return popSeriesData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const seriesSlice = createSlice({
  name: "popularSeries",
  initialState: data,
  extraReducers: (builder) => {
    builder.addCase(getPopSeries.pending, (state) => {
      state.popSLoading = true;
    });

    builder.addCase(getPopSeries.fulfilled, (state, { payload }) => {
      state.popSLoading = false;
      state.popSeries = payload.results;
    });
    builder.addCase(getPopSeries.rejected, (state, { payload }) => {
      state.popSLoading = false;
      state.popSErr = payload.message;
    });
  },
});

export const popularSeries = seriesSlice.reducer;
