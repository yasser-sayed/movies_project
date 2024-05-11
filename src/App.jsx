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

const App = () => {
  return (
    <div className="min-h-screen  dark:text-gray-300 relative">
      <NavBar />

      <Routes>
        {/* main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:movId/title/:movTitle" element={<MovDet />} />
        <Route path="/series" element={<Series />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* details page routes */}
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
        <Route
          path="/collection/:collecId/title/:collecTitle"
          element={<Collections />}
        />

        {/* error page */}
        <Route path="*" element={<PageError />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
