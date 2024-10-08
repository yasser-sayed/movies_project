import React from "react";
import NavBar from "./pages_src/components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages_src/home/Home";
import Movies from "./pages_src/movies/Movies";
import Series from "./pages_src/series/Series";
import ContactUs from "./pages_src/ContactUs";
import PageError from "./pages_src/PageError";
import Footer from "./pages_src/components/Footer";
import MovDet from "./pages_src/movie_pages/movie_details/MovDet";
import Cast from "./pages_src/movie_pages/cast/Cast";
import Reviews from "./pages_src/movie_pages/reviews/Reviews";
import Videos from "./pages_src/movie_pages/videos/Videos";
import BackDrops from "./pages_src/movie_pages/backDrops/BackDrops";
import Posters from "./pages_src/movie_pages/posters/Posters";
import Collections from "./pages_src/movie_pages/collections/Collections";
import TvDet from "./pages_src/series_pages/series_details/TvDet";
import TvCast from "./pages_src/series_pages/cast/TvCast";
import TvReviews from "./pages_src/series_pages/reviews/TvReviews";
import TvSeasons from "./pages_src/series_pages/seasons/TvSeasons";
import TvVideos from "./pages_src/series_pages/videos/TvVideos";
import TvBackDrops from "./pages_src/series_pages/backDrops/TvBackDrops";
import TvPosters from "./pages_src/series_pages/posters/TvPosters";
import SeasonEpisodes from "./pages_src/series_pages/seasons/season_episodes/SeasonEpisodes";
import EpisodeCast from "./pages_src/series_pages/seasons/season_episodes/episode_cast/EpisodeCast";
import Person from "./pages_src/person/Person";
import SearchMenu from "./pages_src/search/SearchMenu";

const App = () => {
  return (
    <div className="min-h-screen  dark:text-gray-300 relative">
      <NavBar />

      <Routes>
        {/* main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/*movie details page routes */}
        <Route path="/movie/:movId/title/:movTitle" element={<MovDet />} />

        <Route path="/movie/:movId/title/:movTitle/cast" element={<Cast />} />
        <Route
          path="/movie/:movId/title/:movTitle/reviews"
          element={<Reviews />}
        />
        <Route
          path="/movie/:movId/title/:movTitle/videos"
          element={<Videos />}
        />
        <Route
          path="/movie/:movId/title/:movTitle/backdrops"
          element={<BackDrops />}
        />
        <Route
          path="/movie/:movId/title/:movTitle/posters"
          element={<Posters />}
        />

        {/*series details page routes */}
        <Route path="/tv/:tvId/name/:tvName" element={<TvDet />} />

        <Route path="/tv/:tvId/name/:tvName/cast" element={<TvCast />} />
        <Route path="/tv/:tvId/name/:tvName/reviews" element={<TvReviews />} />
        <Route path="/tv/:tvId/name/:tvName/videos" element={<TvVideos />} />
        <Route
          path="/tv/:tvId/name/:tvName/backdrops"
          element={<TvBackDrops />}
        />
        <Route path="/tv/:tvId/name/:tvName/posters" element={<TvPosters />} />

        {/* seasons routes */}
        <Route path="/tv/:tvId/name/:tvName/seasons" element={<TvSeasons />} />
        <Route
          path="/tv/:tvId/name/:seasonName/season/:seasonNum"
          element={<SeasonEpisodes />}
        />
        <Route
          path="/tv/:tvId/season/:seasonNum/episode/:episNum"
          element={<EpisodeCast />}
        />

        {/* collection route */}
        <Route
          path="/collection/:collecId/title/:collecTitle"
          element={<Collections />}
        />

        {/* person route */}
        <Route
          path="/person/:personId/hisname/:personName"
          element={<Person />}
        />

        {/* search route */}
        <Route path="/search/:srchWord/in/:srchType" element={<SearchMenu />} />

        {/* error page */}
        <Route path="*" element={<PageError />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
