import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CastDet from "./bodyDet_components/CastDet";
import ReviewsDet from "./bodyDet_components/ReviewsDet";
import {
  getImgs,
  getReviews,
} from "../../../redux_system/slices/movies_Slices/movDetailsSlice";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import MessageError from "../../components/MessageError";
import MediaDet from "./bodyDet_components/MediaDet";

const BodyDet = ({ credits }) => {
  const { theme } = useSelector((state) => state.config);
  const { reviews, reviewsLoading, reviewsErr, creditsLoading, creditsErr } =
    useSelector((state) => state.movDetails);
  const { movId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(movId));
    dispatch(getImgs(movId));
  }, []);

  return (
    <section className="col-span-full lg:col-span-9 px-6 flex flex-col gap-4">
      {creditsLoading ? (
        <Loading />
      ) : creditsErr ? (
        <MessageError err={creditsErr} />
      ) : (
        <CastDet credits={credits} theme={theme} />
      )}

      {reviewsLoading ? (
        <Loading />
      ) : reviewsErr ? (
        <MessageError err={reviewsErr} />
      ) : (
        <ReviewsDet reviews={reviews} theme={theme} />
      )}

      <MediaDet />
    </section>
  );
};

export default BodyDet;
