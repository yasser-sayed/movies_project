import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//slice state
const data = {
  //modDetails
  movDet: [],
  movDetLoading: false,
  movDetErr: null,
  //credits
  credits: null,
  creditsLoading: false,
  creditsErr: null,
  //videos
  videos: [],
  videosLoading: false,
  videosErr: null,
  //social
  social: null,
  socialLoading: false,
  socialErr: null,
  //keywords
  keyWords: [],
  keyWordsLoading: false,
  keyWordsErr: null,
  //reviews
  reviews: [],
  reviewsLoading: false,
  reviewsErr: null,
  //imgs
  backDrops: [],
  posters: [],
  imgsLoading: false,
  imgsErr: null,
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

//social function
export const getSocial = createAsyncThunk("getSocial", async (id, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const socialData = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}/external_ids`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
      },
    });

    return socialData.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

//keyWords function
export const getKeyWords = createAsyncThunk(
  "getKeyWords",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const keyWordsData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/keywords`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return keyWordsData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//reviews function
export const getReviews = createAsyncThunk(
  "getReviews",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const reviewsData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return reviewsData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//images function
export const getImgs = createAsyncThunk("getImgs", async (id, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const imgsData = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}/images`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
      },
    });

    return imgsData.data;
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

    //social handler
    builder.addCase(getSocial.pending, (state) => {
      state.socialLoading = true;
    });
    builder.addCase(getSocial.fulfilled, (state, { payload }) => {
      state.socialLoading = false;
      state.social = payload;
    });
    builder.addCase(getSocial.rejected, (state, { payload }) => {
      state.socialLoading = false;
      state.socialErr = payload.message;
    });

    //keyWords handler
    builder.addCase(getKeyWords.pending, (state) => {
      state.keyWordsLoading = true;
    });
    builder.addCase(getKeyWords.fulfilled, (state, { payload }) => {
      state.keyWordsLoading = false;
      state.keyWords = payload.keywords;
    });
    builder.addCase(getKeyWords.rejected, (state, { payload }) => {
      state.keyWordsLoading = false;
      state.keyWordsErr = payload.message;
    });

    //reviews handler
    builder.addCase(getReviews.pending, (state) => {
      state.reviewsLoading = true;
    });
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      state.reviewsLoading = false;
      state.reviews = payload.results;
    });
    builder.addCase(getReviews.rejected, (state, { payload }) => {
      state.reviewsLoading = false;
      state.reviewsErr = payload.message;
    });

    //imgs handler
    builder.addCase(getImgs.pending, (state) => {
      state.imgsLoading = true;
    });
    builder.addCase(getImgs.fulfilled, (state, { payload }) => {
      state.imgsLoading = false;
      state.backDrops = payload.backdrops;
      state.posters = payload.posters;
    });
    builder.addCase(getImgs.rejected, (state, { payload }) => {
      state.imgsLoading = false;
      state.imgsErr = payload.message;
    });
  },
});

export const movDetails = movDetailsSlice.reducer;
