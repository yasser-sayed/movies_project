import React, { useEffect } from "react";
import HeaderH from "./components/HeaderH";

import SliderH from "./components/SliderH";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularMovies,
  getTopMovies,
} from "../../redux_system/slices/movies_Slices/homeMoviesSlice";
import {
  getPopularSeries,
  getTopSeries,
} from "../../redux_system/slices/series_Slices/homeSeriesSlice";
import TopRatedH from "./components/TopRatedH";

const Home = () => {
  const {
    popMovies: { results: popMov },
    topMovies: { results: topMov },
  } = useSelector((state) => state.homeMovies);

  const {
    popSeries: { results: popSer },
    topSeries: { results: topSer },
  } = useSelector((state) => state.homeSeries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getPopularSeries());
    dispatch(getTopMovies());
    dispatch(getTopSeries());
  }, []);

  return (
    <div className="px-10 md:px-16">
      <HeaderH />

      <SliderH content={popMov} title={"Movies"} />
      <SliderH content={popSer} title={"Series"} />

      <TopRatedH content={topMov} title={"Movies"} showName={true} />
      <TopRatedH content={topSer} title={"Series"} showName={false} />
    </div>
  );
};

export default Home;
