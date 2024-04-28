import { Button } from "@material-tailwind/react";
import React from "react";
import NavBar from "./pages_src/components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages_src/home/Home";
import Movies from "./pages_src/movies/Movies";
import Series from "./pages_src/series/Series";
import ContactUs from "./pages_src/ContactUs";
import PageError from "./pages_src/PageError";
import Footer from "./pages_src/components/Footer";

const App = () => {
  return (
    <div className="min-h-screen  dark:text-gray-300">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<PageError />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
