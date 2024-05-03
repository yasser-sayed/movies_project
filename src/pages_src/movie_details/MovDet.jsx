import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCredits,
  getMovDet,
  getVidoes,
} from "../../redux_system/slices/movies_Slices/movDetailsSlice";
import MovHeader from "./components/MovHeader";
import Loading from "../components/Loading";

const MovDet = () => {
  const { movId } = useParams();
  const {
    movDet,
    movDetLoading,
    credits,
    creditsLoading,
    videos,
    videosLoading,
  } = useSelector((state) => state.movDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovDet(movId));
    dispatch(getCredits(movId));
    dispatch(getVidoes(movId));
  }, []);

  return (
    <div>
      {movDetLoading || creditsLoading ? (
        <Loading />
      ) : (
        <MovHeader mov={movDet} credits={credits} videos={videos[0]} />
      )}
    </div>
  );
};

export default MovDet;
