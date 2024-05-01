import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { getPopMovies } from "../../redux_system/slices/movies_Slices/moviesSlice";
import Loading from "../components/Loading";
import MessageError from "../components/MessageError";
import MoviesList from "./components/MoviesList";
import MoviesPagination from "./components/MoviesPagination";

const Movies = () => {
  const [active, setActive] = useState(1);
  const { popMovies, popMLoading, popMErr } = useSelector(
    (state) => state.popularMovies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopMovies());
  }, []);

  return (
    <div className="px-10 md:px-16 my-12 text-center min-h-[80vh]">
      <section>
        <Typography variant="h1">Movies</Typography>

        <Typography variant="h2" className="font-thin mt-1">
          page <span className="text-blue-500">{active}</span> of{" "}
          <span className="text-blue-500">500</span>
        </Typography>
      </section>

      {popMLoading ? (
        <Loading />
      ) : popMErr ? (
        <MessageError err={popMErr} />
      ) : (
        <MoviesList content={popMovies} />
      )}

      <MoviesPagination active={active} setActive={setActive} />
    </div>
  );
};

export default Movies;
