import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCredits,
  getKeyWords,
  getMovDet,
  getSocial,
  getVidoes,
} from "./../../../redux_system/slices/movies_Slices/movDetailsSlice";
import MovHeader from "./components/MovHeader";
import SideBar from "./components/SideBar";
import BodyDet from "./components/BodyDet";
import Loading from "./../../components/Loading";
import MessageError from "./../../components/MessageError";

const MovDet = () => {
  const { movId } = useParams();
  const { movDet, movDetLoading, movDetErr, credits, videos } = useSelector(
    (state) => state.movDetails
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovDet(movId));
    dispatch(getCredits(movId));
    dispatch(getVidoes(movId));
    dispatch(getSocial(movId));
    dispatch(getKeyWords(movId));
  }, [movId]);

  return (
    <div>
      {movDetLoading ? (
        <Loading />
      ) : movDetErr ? (
        <MessageError err={movDetErr} />
      ) : (
        <MovHeader mov={movDet} credits={credits} videos={videos[0]} />
      )}

      <section className="grid grid-cols-12 my-8 mx-4">
        <BodyDet
          credits={credits}
          movDet={movDet}
          movDetLoading={movDetLoading}
        />

        {movDetLoading ? (
          <Loading />
        ) : movDetErr ? (
          <MessageError err={movDetErr} />
        ) : (
          <SideBar movDet={movDet} />
        )}
      </section>
    </div>
  );
};

export default MovDet;
