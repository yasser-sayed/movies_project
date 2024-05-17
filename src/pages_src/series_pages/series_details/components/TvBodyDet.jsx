import React, { useEffect } from "react";
import TvCastDet from "./tvBodyDet_components/TvCastDet";
import MessageError from "../../../components/MessageError";
import Loading from "../../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import TvSeasonsDet from "./tvBodyDet_components/TvSeasonsDet";
import { useParams } from "react-router-dom";
import {
  getTvImgs,
  getTvRecom,
  getTvReviews,
} from "../../../../redux_system/slices/series_Slices/tvDetailsSlice";
import TvReviewsDet from "./tvBodyDet_components/TvReviewsDet";
import TvRecommendationsDet from "./tvBodyDet_components/TvRecommendationsDet";
import TvMediaDet from "./tvBodyDet_components/TvMediaDet";

const TvBodyDet = () => {
  const { theme } = useSelector((state) => state.config);
  const {
    creditsLoading,
    creditsErr,
    credits,
    tvDet,
    tvDetLoading,
    tvDetErr,
    reviews,
    reviewsLoading,
    reviewsErr,
    recom,
    recomLoading,
    recomErr,
  } = useSelector((state) => state.tvDetails);

  const { tvId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTvReviews(tvId));
    dispatch(getTvRecom(tvId));
    dispatch(getTvImgs(tvId));
  }, [tvId]);
  return (
    <section className="col-span-full lg:col-span-9 px-6 flex flex-col gap-4">
      {creditsLoading ? (
        <Loading />
      ) : creditsErr ? (
        <MessageError err={creditsErr} />
      ) : (
        <TvCastDet credits={credits} theme={theme} />
      )}

      {tvDetLoading ? (
        <Loading />
      ) : tvDetErr ? (
        <MessageError err={tvDetErr} />
      ) : (
        <TvSeasonsDet tvDet={tvDet} theme={theme} />
      )}

      {reviewsLoading ? (
        <Loading />
      ) : reviewsErr ? (
        <MessageError err={reviewsErr} />
      ) : (
        <TvReviewsDet reviews={reviews} theme={theme} />
      )}

      <TvMediaDet />

      {recomLoading ? (
        <Loading />
      ) : recomErr ? (
        <MessageError err={recomErr} />
      ) : (
        <TvRecommendationsDet recom={recom} />
      )}
    </section>
  );
};

export default TvBodyDet;
