import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  srchResult: [],
  srchLoading: false,
  srchErr: null,
};

//movie result
export const getMovieSrch = createAsyncThunk(
  "get movie search result",
  async (word, thunckApi) => {
    const { rejectWithValue } = thunckApi;

    try {
      const result = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        params: {
          query: word,
          include_adult: "false",
          language: "en-US",
          page: "1",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return result.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//series result
export const getTvSrch = createAsyncThunk(
  "get series search result",
  async (word, thunckApi) => {
    const { rejectWithValue } = thunckApi;

    try {
      const result = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/tv",
        params: {
          query: word,
          include_adult: "false",
          language: "en-US",
          page: "1",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return result.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const srchSlice = createSlice({
  name: "search slice",
  initialState: data,
  extraReducers: (builder) => {
    builder.addCase(getMovieSrch.pending, (state) => {
      state.srchLoading = true;
    });
    builder.addCase(getMovieSrch.fulfilled, (state, { payload }) => {
      state.srchLoading = false;
      state.srchResult = payload.results;
    });
    builder.addCase(getMovieSrch.rejected, (state, { payload }) => {
      state.srchLoading = false;
      state.srchErr = payload.message;
    });

    builder.addCase(getTvSrch.pending, (state) => {
      state.srchLoading = true;
    });
    builder.addCase(getTvSrch.fulfilled, (state, { payload }) => {
      state.srchLoading = false;
      state.srchResult = payload.results;
    });
    builder.addCase(getTvSrch.rejected, (state, { payload }) => {
      state.srchLoading = false;
      state.srchErr = payload.message;
    });
  },
});

export const search = srchSlice.reducer;
