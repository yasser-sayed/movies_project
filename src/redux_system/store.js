import { configureStore } from "@reduxjs/toolkit";
import { config } from "./slices/configSlice";
import { homeMovies } from "./slices/movies_Slices/homeMoviesSlice";
import { homeSeries } from "./slices/series_Slices/homeSeriesSlice";

const store = configureStore({ reducer: { config, homeMovies, homeSeries } });

export default store;
