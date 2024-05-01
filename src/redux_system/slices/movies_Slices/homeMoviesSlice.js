import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  sliderMovies: [],
  sliderMLoading: false,
  sliderMErr: null,
  topMovies: [],
  topMLoading: false,
  topMErr: null,
};

//popular movies axios
export const getSliderMovies = createAsyncThunk(
  "getSliderMovies",
  async (NU, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const sliderMoviesData = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return sliderMoviesData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//toprated movies axios
export const getTopMovies = createAsyncThunk(
  "getTopMovies",
  async (NU, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const topMoviesData = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/top_rated",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return topMoviesData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const homeMoviesSlice = createSlice({
  name: "homeMovies",
  initialState: data,
  extraReducers: (builder) => {
    //popular movies handler
    builder.addCase(getSliderMovies.pending, (state) => {
      state.sliderMLoading = true;
    });

    builder.addCase(getSliderMovies.fulfilled, (state, { payload }) => {
      state.sliderMLoading = false;
      state.sliderMovies = payload.results;
    });

    builder.addCase(getSliderMovies.rejected, (state, { payload }) => {
      state.sliderMLoading = false;
      state.sliderMErr = payload.message;
    });

    //popular movies handler
    builder.addCase(getTopMovies.pending, (state) => {
      state.topMLoading = true;
    });

    builder.addCase(getTopMovies.fulfilled, (state, { payload }) => {
      state.topMLoading = false;
      state.topMovies = payload.results;
    });

    builder.addCase(getTopMovies.rejected, (state, { payload }) => {
      state.topMLoading = false;
      state.topMErr = payload.message;
    });
  },
});

export const homeMovies = homeMoviesSlice.reducer;
