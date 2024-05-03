import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//slice state
const data = {
  movDet: [],
  movDetLoading: false,
  movDetErr: null,
  credits: null,
  creditsLoading: false,
  creditsErr: null,
  videos: [],
  videosLoading: false,
  videosErr: null,
};

//movie detais function
export const getMovDet = createAsyncThunk("getMovDet", async (id, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const movDetData = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
      },
    });

    return movDetData.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

//credits function
export const getCredits = createAsyncThunk(
  "getCredits",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const creditsData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/credits`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return creditsData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//videos function
export const getVidoes = createAsyncThunk("getVidoes", async (id, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const videosData = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}/videos`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
      },
    });

    return videosData.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

//slice
const movDetailsSlice = createSlice({
  name: "movDetails",
  initialState: data,
  extraReducers: (builder) => {
    //movies details handler
    builder.addCase(getMovDet.pending, (state) => {
      state.movDetLoading = true;
    });
    builder.addCase(getMovDet.fulfilled, (state, { payload }) => {
      state.movDetLoading = false;
      state.movDet = payload;
    });
    builder.addCase(getMovDet.rejected, (state, { payload }) => {
      state.movDetLoading = false;
      state.movDetErr = payload.message;
    });

    //credits handler
    builder.addCase(getCredits.pending, (state) => {
      state.creditsLoading = true;
    });
    builder.addCase(getCredits.fulfilled, (state, { payload }) => {
      state.creditsLoading = false;
      state.credits = payload;
    });
    builder.addCase(getCredits.rejected, (state, { payload }) => {
      state.creditsLoading = false;
      state.creditsErr = payload.message;
    });

    //videos handler
    builder.addCase(getVidoes.pending, (state) => {
      state.videosLoading = true;
    });
    builder.addCase(getVidoes.fulfilled, (state, { payload }) => {
      state.videosLoading = false;
      state.videos = payload.results;
    });
    builder.addCase(getVidoes.rejected, (state, { payload }) => {
      state.videosLoading = false;
      state.videosErr = payload.message;
    });
  },
});

export const movDetails = movDetailsSlice.reducer;
