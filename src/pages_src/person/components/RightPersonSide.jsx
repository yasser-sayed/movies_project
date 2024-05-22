import React, { useEffect } from "react";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { IoStar, IoStarOutline } from "react-icons/io5";

const RightPersonSide = ({ personDet, personWorks }) => {
  const navigate = useNavigate();

  return (
    <section className="lg:col-span-2 leading-loose	flex flex-col gap-14 text-center lg:text-start px-6">
      <Typography variant="h3">{personDet?.name} </Typography>
      <div>
        <Typography variant="h4" color="blue" className="inline-block">
          Biography :
        </Typography>
        <p>
          {personDet?.biography
            ? personDet?.biography
            : "no Biography for this person"}
        </p>
      </div>

      <div>
        <Typography variant="h3" color="blue">
          {personDet?.gender == 1 ? "her" : "his"} works{" "}
        </Typography>
        <div className=" flex overflow-x-auto justify-stretch  my-5 pb-2 gap-5">
          {personWorks.map((mov, key) =>
            mov.media_type == "movie" ? (
              <Card
                key={key}
                className="mt-6 min-w-[15rem] bg-[#9daaf7] bg-opacity-50 shadow-lg dark:bg-[#212529] rounded-lg"
              >
                <Link to={`/movie/${mov.id}/title/${mov.title}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${mov.poster_path}`}
                    alt="card-image"
                    className="rounded-t-lg "
                  />
                </Link>
                <CardBody>
                  <Typography
                    as={Link}
                    to={`/movie/${mov.id}/title/${mov.title}`}
                    variant="h5"
                    className="mb-2 dark:text-gray-200"
                  >
                    {mov.title}
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
            ) : (
              <Card
                key={key}
                className="mt-6 min-w-[13rem] bg-[#9daaf7] bg-opacity-50 shadow-lg dark:bg-[#212529] rounded-lg"
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
            )
          )}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Button
          size="sm"
          variant="outlined"
          color="blue"
          onClick={() => navigate(-1)}
          className="lowercase text-sm"
        >
          Back a Step
        </Button>
      </div>
    </section>
  );
};

export default RightPersonSide;
