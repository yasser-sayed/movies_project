import React, { useEffect } from "react";
import SecHeader from "../components/SecHeader";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../redux_system/slices/movies_Slices/movDetailsSlice";
import Loading from "../components/Loading";
import MessageError from "../components/MessageError";
import { Button, Typography } from "@material-tailwind/react";
import ShowMoreText from "react-show-more-text";

const Reviews = () => {
  const { movId } = useParams();
  const dispatch = useDispatch();

  const { reviews, reviewsLoading, reviewsErr } = useSelector(
    (state) => state.movDetails
  );
  const { theme } = useSelector((state) => state.config);

  useEffect(() => {
    dispatch(getReviews(movId));
  }, []);
  return (
    <div>
      <SecHeader />

      <Typography
        variant="h3"
        color="blue"
        className=" md:ms-16 text-center md:text-start mt-8"
      >
        reviews
      </Typography>

      {reviewsLoading ? (
        <Loading />
      ) : reviewsErr ? (
        <MessageError err={reviewsErr} />
      ) : (
        <div className="flex flex-col mx-4 md:mx-16   my-10 justify-center items-center gap-10">
          {reviews?.map((review, i) => (
            <div
              key={i}
              className=" flex justify-center text-center md:text-start md:justify-start items-center gap-6 bg-[#DEEEF5] dark:bg-[#252E2D] p-4 w-full rounded-xl flex-wrap md:flex-nowrap "
            >
              <div className="bg-gray-400 rounded-full px-9 py-6  ">
                <Typography variant="h3" color="white">
                  R
                </Typography>{" "}
              </div>

              <div className="flex flex-col gap-3">
                <Typography variant="h4" color={theme ? "black" : "white"}>
                  A review by{" "}
                  <span className="text-blue-500">{review.author}</span>
                </Typography>

                <Typography
                  color={theme ? "black" : "white"}
                  variant="paragraph"
                >
                  Written by{" "}
                  <span className="text-blue-500">{review.author}</span> on{" "}
                  <span className="text-blue-500">{review.created_at}</span>{" "}
                </Typography>

                <Typography variant="h5" color="red">
                  Content :-
                </Typography>

                <ShowMoreText
                  className="text-black dark:text-white"
                  anchorClass="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  {review.content}
                </ShowMoreText>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center items-center">
        <Link to={-1}>
          <Button variant="outlined" color="blue" className="lowercase text-sm">
            back a step
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
