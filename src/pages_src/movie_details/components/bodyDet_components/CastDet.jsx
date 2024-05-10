import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const CastDet = ({ credits, theme }) => {
  const { movId, movTitle } = useParams();

  return (
    <div>
      <Typography variant="h4" color="blue">
        {" "}
        Top Billed Cast
      </Typography>

      <div className=" flex overflow-x-auto justify-stretch  my-5 pb-2 gap-5">
        {credits?.cast.slice(0, 10).map((actor, i) => (
          <Card
            key={i}
            className="min-w-48 bg-[#9daaf7] bg-opacity-50 dark:bg-[#252E2D]"
          >
            <Link to="/">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`
                    : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                }
                alt="profile-picture"
                className="rounded-t-xl "
              />
            </Link>

            <CardBody className="text-center">
              <Typography
                as={Link}
                to="/"
                variant="h5"
                color={theme ? "blue-gray" : "white"}
                className="mb-2"
              >
                {actor?.name}
              </Typography>

              <Typography
                color={theme ? "blue-gray" : "gray"}
                className="font-medium"
                textGradient
              >
                {actor?.character}
              </Typography>
            </CardBody>
          </Card>
        ))}

        {credits?.cast.length > 10 && (
          <Card className="min-w-48 bg-[#DEEEF5] dark:bg-[#252E2D]">
            <CardBody className=" flex items-center justify-center h-full">
              <Typography
                as={Link}
                to={`/movie/${movId}/title/${movTitle}/cast`}
                variant="paragraph"
                color={theme ? "blue-gray" : "white"}
                className="mb-2 hover:text-blue-500 flex items-center justify-center gap-2"
              >
                Show More <FaArrowRightLong />
              </Typography>
            </CardBody>
          </Card>
        )}
      </div>

      <Typography
        as={Link}
        variant="paragraph"
        to={`/movie/${movId}/title/${movTitle}/cast`}
        className="text-blue-400 hover:text-blue-700 inline-block"
      >
        Full Cast & Crew
      </Typography>
    </div>
  );
};

export default CastDet;
