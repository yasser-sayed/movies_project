import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

const TvSeasonsDet = ({ tvDet, theme }) => {
  const { tvId, tvName } = useParams();
  return (
    <div className="flex items-center justify-center my-6 text-center flex-col gap-3">
      <Typography variant="h3" color="blue" className="self-start">
        Last Season
      </Typography>
      <Card className="w-96 lg:w-full flex-col lg:flex-row bg-[#9daaf7] bg-opacity-50 shadow-lg dark:bg-[#212529] rounded-lg">
        <Link
          to={`/tv/${tvId}/name/${
            tvDet?.seasons[tvDet.seasons.length - 1].name
          }/season/${tvDet?.seasons[tvDet.seasons.length - 1].season_number}`}
        >
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${
              tvDet?.seasons[tvDet.seasons.length - 1].poster_path
            }`}
            alt="poster"
            className="w-full lg:w-40 rounded-t-lg lg:rounded-s-lg"
          />
        </Link>
        <CardBody className="flex flex-col items-center justify-center lg:items-start gap-5">
          <div>
            <Link
              to={`/tv/${tvId}/name/${
                tvDet?.seasons[tvDet.seasons.length - 1].name
              }/season/${
                tvDet?.seasons[tvDet.seasons.length - 1].season_number
              }`}
            >
              <Typography
                variant="h4"
                color={theme ? "gray" : "white"}
                className=" hover:text-gray-500 inline-block"
              >
                {tvDet?.seasons[tvDet.seasons.length - 1].name}
                {""}
              </Typography>
            </Link>

            <Typography
              variant="h4"
              color={theme ? "gray" : "white"}
              className="inline-block ms-4"
            >
              {tvDet?.seasons[tvDet.seasons.length - 1].air_date?.slice(0, 4)} |{" "}
              {tvDet?.seasons[tvDet.seasons.length - 1].episode_count} Episodes
            </Typography>
          </div>

          <ShowMoreText
            lines={2}
            className="text-black dark:text-white"
            anchorClass="text-blue-500 hover:text-blue-700 cursor-pointer"
          >
            <Typography
              color={theme ? "gray" : "white"}
              className=" font-normal"
            >
              {tvDet?.seasons[tvDet.seasons.length - 1].overview
                ? tvDet?.seasons[tvDet.seasons.length - 1].overview
                : "there is no overview for this season"}{" "}
            </Typography>
          </ShowMoreText>
        </CardBody>
      </Card>

      <Typography
        as={Link}
        variant="paragraph"
        to={`/tv/${tvId}/name/${tvName}/seasons`}
        className="text-blue-400 hover:text-blue-700 inline-block self-start"
      >
        View All Seasons
      </Typography>
    </div>
  );
};

export default TvSeasonsDet;
