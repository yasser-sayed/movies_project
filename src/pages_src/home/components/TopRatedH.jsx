import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Rating from "react-rating";
import { IoStar, IoStarOutline } from "react-icons/io5";
import MessageError from "./../../components/MessageError";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

const TopRatedH = ({ content, title, showName, topLoading, topErr }) => {
  return (
    <div className="my-12">
      <Typography variant="h2" color="red">
        Top Rated {title}
      </Typography>

      <div className="flex items-center justify-center flex-wrap gap-6">
        {topLoading ? (
          <Loading />
        ) : topErr ? (
          <MessageError err={topErr} />
        ) : (
          content?.map((mov, key) => (
            <Card
              key={key}
              className="mt-6 w-[19rem] bg-[#9daaf7] bg-opacity-50 shadow-lg dark:bg-[#212529] rounded-lg"
            >
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${mov.poster_path}`}
                alt="card-image"
                className="rounded-t-lg "
              />
              <CardBody>
                <Typography variant="h5" className="mb-2 dark:text-gray-200">
                  {showName ? mov.title : mov.name}
                </Typography>

                <div className="flex justify-between items-center">
                  <Typography
                    variant="h6"
                    className="dark:text-gray-200 font-semibold"
                  >
                    Rate :{" "}
                    <span className="text-blue-500">{mov.vote_average}</span>
                  </Typography>

                  <Rating
                    emptySymbol={<IoStarOutline />}
                    fullSymbol={<IoStar className="text-yellow-600" />}
                    readonly
                    initialRating={mov.vote_average}
                    stop={10}
                    step={2}
                    fractions={2}
                    className="text-gray-300"
                  />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Link
                  to={
                    showName ? `/movie/${mov.id}/title/${mov.title}` : "/series"
                  }
                >
                  <Button variant="outlined" color="blue" className="">
                    Show Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TopRatedH;
