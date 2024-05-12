import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getTvCredits,
  getTvDet,
  getTvKeyWords,
  getTvSocial,
} from "../../../redux_system/slices/series_Slices/tvDetailsSlice";
import Loading from "../../components/Loading";
import MessageError from "../../components/MessageError";
import TvHeader from "./components/TvHeader";
import { getVidoes } from "../../../redux_system/slices/movies_Slices/movDetailsSlice";
import TvBodyDet from "./components/TvBodyDet";
import TvSideBar from "./components/TvSideBar";

const TvDet = () => {
  const { tvId } = useParams();
  const dispatch = useDispatch();

  const { tvDet, tvDetLoading, tvDetErr, credits, videos } = useSelector(
    (state) => state.tvDetails
  );

  useEffect(() => {
    dispatch(getTvDet(tvId));
    dispatch(getTvCredits(tvId));
    dispatch(getVidoes(tvId));
    dispatch(getTvSocial(tvId));
    dispatch(getTvKeyWords(tvId));
  }, []);

  return (
    <div>
      {tvDetLoading ? (
        <Loading />
      ) : tvDetErr ? (
        <MessageError err={tvDetErr} />
      ) : (
        <TvHeader tvDet={tvDet} credits={credits} videos={videos} />
      )}

      <section className="grid grid-cols-12 my-8 mx-4">
        <TvBodyDet
          credits={credits}
          tvDet={tvDet}
          tvDetLoading={tvDetLoading}
        />

        {tvDetLoading ? (
          <Loading />
        ) : tvDetErr ? (
          <MessageError err={tvDetErr} />
        ) : (
          <TvSideBar tvDet={tvDet} />
        )}
      </section>
    </div>
  );
};

export default TvDet;
