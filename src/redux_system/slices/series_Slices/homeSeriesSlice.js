import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  sliderSeries: [],
  sliderSLoading: false,
  sliderSErr: null,
  topSeries: [],
  topSLoading: false,
  topSErr: null,
};

//Sliderular series axios
export const getSliderSeries = createAsyncThunk(
  "getSliderSeries",
  async (NU, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const sliderSeriesData = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/airing_today",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return sliderSeriesData.data;
    } catch (err) {
      return rejectWithValue(err);
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
      return rejectWithValue(err);
    }
  }
);

const homeSeriesSlice = createSlice({
  name: "homeSeries",
  initialState: data,
  extraReducers: (builder) => {
    //Slider series handler
    builder.addCase(getSliderSeries.pending, (state) => {
      state.sliderSLoading = true;
    });

    builder.addCase(getSliderSeries.fulfilled, (state, { payload }) => {
      state.sliderSLoading = false;
      state.sliderSeries = payload.results;
    });

    builder.addCase(getSliderSeries.rejected, (state, { payload }) => {
      state.sliderSLoading = false;
      state.sliderSErr = payload.message;
    });

    //top series handler
    builder.addCase(getTopSeries.pending, (state) => {
      state.topSLoading = true;
    });

    builder.addCase(getTopSeries.fulfilled, (state, { payload }) => {
      state.topSLoading = false;
      state.topSeries = payload.results;
    });

    builder.addCase(getTopSeries.rejected, (state, { payload }) => {
      state.topSLoading = false;
      state.topSErr = payload.message;
    });
  },
});

export const homeSeries = homeSeriesSlice.reducer;
