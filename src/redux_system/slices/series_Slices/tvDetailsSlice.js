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

  //tv reviews
  reviews: [],
  reviewsLoading: false,
  reviewsErr: null,

  //tv recom
  recom: [],
  recomLoading: false,
  recomErr: null,

  //tv imgs
  backDrops: [],
  posters: [],
  imgsLoading: false,
  imgsErr: null,

  //tv season
  season: null,
  seasonLoading: false,
  seasonErr: null,

  //tv episode
  episode: null,
  episodeLoading: false,
  episodeErr: null,
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

//keywords function
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

//reviews function
export const getTvReviews = createAsyncThunk(
  "getTvReviews",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const tvDetData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/reviews`,
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

//images function
export const getTvImgs = createAsyncThunk("getTvImgs", async (id, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const tvDetData = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${id}/images`,
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

//recommendations function
export const getTvRecom = createAsyncThunk(
  "getTvRecom",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const tvDetData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/recommendations`,
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

//season function
export const getSeason = createAsyncThunk("getSeason", async (id, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const tvDetData = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${id.tvId}/season/${id.seasonNum}`,
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

//episode function
export const getEpisode = createAsyncThunk(
  "getEpisode",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const tvDetData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id.tvId}/season/${id.seasonNum}/credits`,
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

    //tv videos handler
    builder.addCase(getTvVideos.pending, (state) => {
      state.videosLoading = true;
    });

    builder.addCase(getTvVideos.fulfilled, (state, { payload }) => {
      state.videosLoading = false;
      state.videos = payload.results;
    });

    builder.addCase(getTvVideos.rejected, (state, { payload }) => {
      state.videosLoading = false;
      state.videosErr = payload.message;
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

    //tv reviews handler
    builder.addCase(getTvReviews.pending, (state) => {
      state.reviewsLoading = true;
    });

    builder.addCase(getTvReviews.fulfilled, (state, { payload }) => {
      state.reviewsLoading = false;
      state.reviews = payload.results;
    });

    builder.addCase(getTvReviews.rejected, (state, { payload }) => {
      state.reviewsLoading = false;
      state.reviewsErr = payload.message;
    });

    //tv imgs handler
    builder.addCase(getTvImgs.pending, (state) => {
      state.imgsLoading = true;
    });
    builder.addCase(getTvImgs.fulfilled, (state, { payload }) => {
      state.imgsLoading = false;
      state.backDrops = payload.backdrops;
      state.posters = payload.posters;
    });
    builder.addCase(getTvImgs.rejected, (state, { payload }) => {
      state.imgsLoading = false;
      state.imgsErr = payload.message;
    });

    //tv recommendations handler
    builder.addCase(getTvRecom.pending, (state) => {
      state.recomLoading = true;
    });

    builder.addCase(getTvRecom.fulfilled, (state, { payload }) => {
      state.recomLoading = false;
      state.recom = payload.results;
    });

    builder.addCase(getTvRecom.rejected, (state, { payload }) => {
      state.recomLoading = false;
      state.recomErr = payload.message;
    });

    //tv season handler
    builder.addCase(getSeason.pending, (state) => {
      state.seasonLoading = true;
    });

    builder.addCase(getSeason.fulfilled, (state, { payload }) => {
      state.seasonLoading = false;
      state.season = payload;
    });

    builder.addCase(getSeason.rejected, (state, { payload }) => {
      state.seasonLoading = false;
      state.seasonErr = payload.message;
    });

    //tv episode handler
    builder.addCase(getEpisode.pending, (state) => {
      state.episodeLoading = true;
    });

    builder.addCase(getEpisode.fulfilled, (state, { payload }) => {
      state.episodeLoading = false;
      state.episode = payload;
    });

    builder.addCase(getEpisode.rejected, (state, { payload }) => {
      state.episodeLoading = false;
      state.episodeErr = payload.message;
    });
  },
});

export const tvDetails = tvDetailsSlice.reducer;
