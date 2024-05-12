import React, { useEffect } from "react";
import HeaderH from "./components/HeaderH";

import SliderH from "./components/SliderH";
import { useDispatch, useSelector } from "react-redux";
import {
  getSliderMovies,
  getTopMovies,
} from "../../redux_system/slices/movies_Slices/homeMoviesSlice";
import {
  getSliderSeries,
  getTopSeries,
} from "../../redux_system/slices/series_Slices/homeSeriesSlice";
import TopRatedH from "./components/TopRatedH";

const Home = () => {
  const {
    sliderMLoading,
    topMLoading,
    topMErr,
    sliderMErr,
    sliderMovies,
    topMovies,
  } = useSelector((state) => state.homeMovies);

  const {
    sliderSLoading,
    topSLoading,
    topSErr,
    sliderSErr,
    sliderSeries,
    topSeries,
  } = useSelector((state) => state.homeSeries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliderMovies());
    dispatch(getSliderSeries());
    dispatch(getTopMovies());
    dispatch(getTopSeries());
  }, []);

  return (
    <div className="px-10 md:px-16">
      <HeaderH />

      <SliderH
        content={sliderMovies}
        title={"Movies"}
        popLoading={sliderMLoading}
        popErr={sliderMErr}
        movie={true}
      />
      <SliderH
        content={sliderSeries}
        title={"Series"}
        popLoading={sliderSLoading}
        popErr={sliderSErr}
        movie={false}
      />

      <TopRatedH
        content={topMovies}
        title={"Movies"}
        topLoading={topMLoading}
        topErr={topMErr}
        movie={true}
      />
      <TopRatedH
        content={topSeries}
        title={"Series"}
        topLoading={topSLoading}
        topErr={topSErr}
        movie={false}
      />
    </div>
  );
};

export default Home;
