import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  //person details
  personDet: null,
  personDetLoading: false,
  personDetErr: null,

  //person works
  personWorks: [],
  personWorksLoading: false,
  personWorksErr: null,

  //person social
  social: null,
  socialLoading: false,
  socialErr: null,
};

//person details function
export const getPersonDet = createAsyncThunk(
  "getPersonDet",
  async (id, thnukApi) => {
    const { rejectWithValue } = thnukApi;

    try {
      const detData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${id}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return detData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//person works function
export const getPersonWorks = createAsyncThunk(
  "getPersonWorks",
  async (id, thnukApi) => {
    const { rejectWithValue } = thnukApi;

    try {
      const detData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${id}/combined_credits`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return detData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//person social function
export const getPersonSocial = createAsyncThunk(
  "getPersonSocial",
  async (id, thnukApi) => {
    const { rejectWithValue } = thnukApi;

    try {
      const detData = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${id}/external_ids`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDYxMzI0M2EyMjczOWU2MDQxOTI4ZTMxYmJiOWQzOSIsInN1YiI6IjY2MmE3YzBkNGNiZTEyMDBhNmZhMjM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4KfdPC5TDpEcMRnF4IfyqTA14b0tsmQzg3OCrE5NUp4",
        },
      });

      return detData.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//slice
const personSlice = createSlice({
  name: "person slice",
  initialState: data,
  extraReducers: (builder) => {
    //person details handle
    builder.addCase(getPersonDet.pending, (state) => {
      state.personDetLoading = true;
    });
    builder.addCase(getPersonDet.fulfilled, (state, { payload }) => {
      state.personDetLoading = false;
      state.personDet = payload;
    });
    builder.addCase(getPersonDet.rejected, (state, { payload }) => {
      state.personDetLoading = false;
      state.personDetErr = payload.message;
    });

    //person works handle
    builder.addCase(getPersonWorks.pending, (state) => {
      state.personWorksLoading = true;
    });
    builder.addCase(getPersonWorks.fulfilled, (state, { payload }) => {
      state.personWorksLoading = false;
      state.personWorks = payload.cast.length ? payload.cast : payload.crew;
    });
    builder.addCase(getPersonWorks.rejected, (state, { payload }) => {
      state.personWorksLoading = false;
      state.personWorksErr = payload.message;
    });

    //person social handle
    builder.addCase(getPersonSocial.pending, (state) => {
      state.socialLoading = true;
    });
    builder.addCase(getPersonSocial.fulfilled, (state, { payload }) => {
      state.socialLoading = false;
      state.social = payload;
    });
    builder.addCase(getPersonSocial.rejected, (state, { payload }) => {
      state.socialLoading = false;
      state.socialErr = payload.message;
    });
  },
});

export const person = personSlice.reducer;
