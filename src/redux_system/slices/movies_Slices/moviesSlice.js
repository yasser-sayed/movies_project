import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  popMovies: [],
  popMLoading: false,
  popMErr: null,
};

export const getPopMovies = createAsyncThunk(
  "getPopMovies",
  async (pageNum = 1, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const popMoviesData = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
        params: { language: "en-US", page: `${pageNum}` },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return popMoviesData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const moviesSlice = createSlice({
  name: "popMovies",
  initialState: data,
  extraReducers: (builder) => {
    builder.addCase(getPopMovies.pending, (state) => {
      state.popMLoading = true;
    });

    builder.addCase(getPopMovies.fulfilled, (state, { payload }) => {
      state.popMLoading = false;
      state.popMovies = payload.results;
    });
    builder.addCase(getPopMovies.rejected, (state, { payload }) => {
      state.popMLoading = false;
      state.popMErr = payload.message;
    });
  },
});

export const popularMovies = moviesSlice.reducer;
