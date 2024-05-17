import { Typography } from "@material-tailwind/react";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EpisodeHeader = ({ episode }) => {
  return (
    <header className="flex gap-4 items-center justify-center md:justify-start flex-col md:flex-row text-center md:text-start max-w-screen-xl mx-auto bg-[#9daaf7] bg-opacity-50 dark:bg-[#212529] py-4 px-10 lg:rounded-lg">
      <img
        width="110px"
        src={
          episode?.still_path
            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${episode?.still_path}`
            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
        }
        alt="poster"
      />

      <div>
        <Typography variant="h4">
          {episode?.name}{" "}
          <span className="text-gray-600">
            ({episode?.air_date?.slice(0, 4)})
          </span>
        </Typography>

        <Typography
          as={Link}
          to={-1}
          variant="paragraph"
          className="text-gray-600 hover:text-gray-900  dark:hover:text-gray-400 inline-block"
        >
          <FaArrowLeftLong className="inline-block text-xs" /> Back to episodes
          list
        </Typography>
      </div>
    </header>
  );
};

export default EpisodeHeader;
