import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CastDet from "./bodyDet_components/CastDet";
import ReviewsDet from "./bodyDet_components/ReviewsDet";
import {
  getImgs,
  getRecom,
  getReviews,
} from "../../../redux_system/slices/movies_Slices/movDetailsSlice";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import MessageError from "../../components/MessageError";
import MediaDet from "./bodyDet_components/MediaDet";
import RecommendationsDet from "./bodyDet_components/RecommendationsDet";
import ColectionDet from "./bodyDet_components/ColectionDet";

const BodyDet = ({ credits, movDet, movDetLoading }) => {
  const { theme } = useSelector((state) => state.config);
  const {
    reviews,
    reviewsLoading,
    reviewsErr,
    creditsLoading,
    creditsErr,
    recom,
    recomLoading,
    recomErr,
    movDetErr,
  } = useSelector((state) => state.movDetails);
  const { movId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(movId));
    dispatch(getImgs(movId));
    dispatch(getRecom(movId));
  }, [movId]);

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

      {movDetLoading ? (
        <Loading />
      ) : movDetErr ? (
        <MessageError err={movDetErr} />
      ) : (
        movDet.belongs_to_collection && (
          <ColectionDet
            theme={theme}
            bg={movDet.belongs_to_collection.backdrop_path}
            collecId={movDet.belongs_to_collection.id}
          />
        )
      )}
      {recomLoading ? (
        <Loading />
      ) : recomErr ? (
        <MessageError err={recomErr} />
      ) : (
        <RecommendationsDet recom={recom} />
      )}
    </section>
  );
};

export default BodyDet;
