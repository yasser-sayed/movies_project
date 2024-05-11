import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { getCollec } from "./../../../../../redux_system/slices/movies_Slices/movDetailsSlice";
import MessageError from "./../../../../components/MessageError";
import Loading from "./../../../../components/Loading";

const ColectionDet = ({ collecId, bg, theme }) => {
  const { collec, collecLoading, collecErr } = useSelector(
    (state) => state.movDetails
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollec(collecId));
  }, [collecId]);

  return (
    <div
      className="bg-img-collection bg-no-repeat bg-cover w-full py-8 rounded-lg text-center relative"
      style={{
        backgroundPosition: " 25% 20%",
        backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${bg})`,
      }}
    >
      {collecLoading ? (
        <Loading />
      ) : collecErr ? (
        <MessageError err={MessageError} />
      ) : (
        <div className="z-10 relative">
          <Typography variant="h3" color="white">
            part of {collec?.name}{" "}
          </Typography>

          <Typography variant="h6" color="blue">
            Includes :
          </Typography>
          {collec?.parts.map((part, i) => (
            <Typography
              key={i}
              variant="h6"
              as={"span"}
              color="white"
              className="flex items-center justify-center gap-1"
            >
              <Typography variant="h6" as="span" color="blue">
                {i + 1} -
              </Typography>
              {part.title}
            </Typography>
          ))}

          <Link to={`/collection/${collec?.id}/title/${collec?.name}`}>
            <button className="bg-transparent text-light-blue-500 border-2 border-white rounded-2xl hover:bg-white text-md mt-4 font-bold px-3 py-1">
              View Collection
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ColectionDet;
