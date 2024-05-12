import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  //tv details
  tvDet: null,
  tvDetLoading: false,
  tvDetErr: null,

  //tv credits
  credits: null,
  creditsLoading: false,
  creditsErr: null,

  //tv videos
  videos: [],
  videosLoading: false,
  videosErr: null,

  //tv social
  social: null,
  socialLoading: false,
  socialErr: null,

  //tv keywords
  keyWords: [],
  keyWordsLoading: false,
  keyWordsErr: null,
};

//series details function
export const getTvDet = createAsyncThunk("getTvDet", async (id, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const tvDetData = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
      },
    });

    return tvDetData.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

//credits function
export const getTvCredits = createAsyncThunk(
  "getTvCredits",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const tvDetData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/credits`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return tvDetData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//videos function
export const getTvVideos = createAsyncThunk(
  "getTvVideos",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const tvDetData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/videos`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return tvDetData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//social function
export const getTvSocial = createAsyncThunk(
  "getTvSocial",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const tvDetData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/external_ids`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return tvDetData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//social function
export const getTvKeyWords = createAsyncThunk(
  "getTvKeyWords",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const tvDetData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/keywords`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return tvDetData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//slice
const tvDetailsSlice = createSlice({
  name: "tvDetails",
  initialState: data,
  extraReducers: (builder) => {
    //tv details handler
    builder.addCase(getTvDet.pending, (state) => {
      state.tvDetLoading = true;
    });

    builder.addCase(getTvDet.fulfilled, (state, { payload }) => {
      state.tvDetLoading = false;
      state.tvDet = payload;
    });

    builder.addCase(getTvDet.rejected, (state, { payload }) => {
      state.tvDetLoading = false;
      state.tvDetErr = payload.message;
    });

    //tv credits handler
    builder.addCase(getTvCredits.pending, (state) => {
      state.creditsLoading = true;
    });

    builder.addCase(getTvCredits.fulfilled, (state, { payload }) => {
      state.creditsLoading = false;
      state.credits = payload;
    });

    builder.addCase(getTvCredits.rejected, (state, { payload }) => {
      state.creditsLoading = false;
      state.creditsErr = payload.message;
    });

    //tv social handler
    builder.addCase(getTvSocial.pending, (state) => {
      state.socialLoading = true;
    });

    builder.addCase(getTvSocial.fulfilled, (state, { payload }) => {
      state.socialLoading = false;
      state.social = payload;
    });

    builder.addCase(getTvSocial.rejected, (state, { payload }) => {
      state.socialLoading = false;
      state.socialErr = payload.message;
    });

    //tv keywords handler
    builder.addCase(getTvKeyWords.pending, (state) => {
      state.keyWordsLoading = true;
    });

    builder.addCase(getTvKeyWords.fulfilled, (state, { payload }) => {
      state.keyWordsLoading = false;
      state.keyWords = payload.results;
    });

    builder.addCase(getTvKeyWords.rejected, (state, { payload }) => {
      state.keyWordsLoading = false;
      state.keyWordsErr = payload.message;
    });
  },
});

export const tvDetails = tvDetailsSlice.reducer;
