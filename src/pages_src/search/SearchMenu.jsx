import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getMovieMenuSrch,
  getTvMenuSrch,
} from "../../redux_system/slices/search_Slices/srchSlice";
import { Typography } from "@material-tailwind/react";
import Loading from "../components/Loading";
import MessageError from "../components/MessageError";
import MoviesList from "../movies/components/MoviesList";
import SeriesList from "../series/components/SeriesList";

const SearchMenu = () => {
  const { srchMenuResult, srchMenuLoading, srchMenuErr } = useSelector(
    (state) => state.search
  );

  const { srchWord, srchType } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    srchType == "movies"
      ? dispatch(getMovieMenuSrch(srchWord))
      : dispatch(getTvMenuSrch(srchWord));
  }, [srchWord, srchType]);

  return (
    <div className="container mx-auto text-center my-8">
      <Typography variant="h3" color="blue">
        search in {srchType}{" "}
      </Typography>

      {srchMenuLoading ? (
        <Loading />
      ) : srchMenuErr ? (
        <MessageError err={srchMenuErr} />
      ) : !srchMenuResult.length ? (
        <div className="h-[70vh] flex items-center justify-center">
          <Typography variant="h4" color="red">
            there is no result for "{srchWord}"
          </Typography>
        </div>
      ) : srchType == "movies" ? (
        <MoviesList content={srchMenuResult} />
      ) : (
        <SeriesList content={srchMenuResult} />
      )}
    </div>
  );
};

export default SearchMenu;
