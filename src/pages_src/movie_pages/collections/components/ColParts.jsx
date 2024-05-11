import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

const ColParts = ({ collec }) => {
  const { theme } = useSelector((state) => state.config);

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 my-12 px-4">
      <Typography
        variant="h3"
        color="blue"
        className="text-center lg:text-start w-full"
      >
        {collec?.parts.length} movies
      </Typography>

      {collec?.parts.map((mov, i) => (
        <Card
          key={i}
          className="w-96 lg:w-full flex-col lg:flex-row bg-[#9daaf7] bg-opacity-50 shadow-lg dark:bg-[#212529] rounded-lg"
        >
          <Link to={`/movie/${mov.id}/title/${mov.title}`}>
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${mov.poster_path}`}
              alt="poster"
              className="lg:w-40 rounded-t-lg lg:rounded-s-lg"
            />
          </Link>
          <CardBody className="flex flex-col items-center justify-center lg:items-start gap-3">
            <Link to={`/movie/${mov.id}/title/${mov.title}`}>
              <Typography
                variant="h4"
                color={theme ? "gray" : "white"}
                className=" hover:text-gray-500"
              >
                {mov.title}
              </Typography>
            </Link>

            <Typography
              variant="paragraph"
              color={theme ? "blue-gray" : "gray"}
              className=""
            >
              {mov.release_date}
            </Typography>
            <ShowMoreText
              lines={2}
              className="text-black dark:text-white"
              anchorClass="text-blue-500 hover:text-blue-700 cursor-pointer"
            >
              <Typography
                color={theme ? "gray" : "white"}
                className=" font-normal"
              >
                {mov.overview}
              </Typography>
            </ShowMoreText>
            <Link
              to={`/movie/${mov.id}/title/${mov.title}`}
              className="inline-block"
            >
              <Button
                color={theme ? "black" : "white"}
                variant="text"
                className="flex items-center gap-2 lowercase"
              >
                show details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default ColParts;
