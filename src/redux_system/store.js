import { configureStore } from "@reduxjs/toolkit";
import { config } from "./slices/configSlice";
import { homeMovies } from "./slices/movies_Slices/homeMoviesSlice";
import { homeSeries } from "./slices/series_Slices/homeSeriesSlice";
import { popularMovies } from "./slices/movies_Slices/moviesSlice";
import { popularSeries } from "./slices/series_Slices/seriesSlice";

const store = configureStore({
  reducer: { config, homeMovies, homeSeries, popularMovies, popularSeries },
});

export default store;
