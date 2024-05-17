import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Rating from "react-rating";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const TvRecommendationsDet = ({ recom }) => {
  return (
    <div>
      <Typography variant="h4" color="blue">
        Recommendations
      </Typography>

      <div className=" flex overflow-x-auto justify-stretch  my-5 pb-2 gap-5">
        {recom.map((mov, key) => (
          <Card
            key={key}
            className="mt-6 min-w-[19rem] bg-[#9daaf7] bg-opacity-50 shadow-lg dark:bg-[#212529] rounded-lg"
          >
            <Link to={`/tv/${mov.id}/name/${mov.name}`}>
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${mov.poster_path}`}
                alt="card-image"
                className="rounded-t-lg "
              />
            </Link>
            <CardBody>
              <Typography
                as={Link}
                to={`/tv/${mov.id}/name/${mov.name}`}
                variant="h5"
                className="mb-2 dark:text-gray-200"
              >
                {mov.name}
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
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TvRecommendationsDet;
