import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../../components/Loading";
import MessageError from "../../../../components/MessageError";

const BackDropsMed = ({ theme, backDrops, backDropsLoading, backDropsErr }) => {
  const { movId, movTitle } = useParams();

  return (
    <div className=" flex overflow-x-auto justify-stretch   pb-2 gap-5 w-full bg-[#9daaf7] bg-opacity-50 dark:bg-[#252E2D] p-3 rounded-xl">
      {backDropsLoading ? (
        <Loading />
      ) : backDropsErr ? (
        <MessageError err={backDropsErr} />
      ) : backDrops.length ? (
        backDrops
          .slice(0, 6)
          .map((img, i) => (
            <img
              key={i}
              className="min-w-96 min-h-80"
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${img.file_path}`}
              alt="poster"
            />
          ))
      ) : (
        <Typography variant="h4" color="blue">
          No back drops have been added.
        </Typography>
      )}

      {backDrops.length > 6 && (
        <Card className="min-w-48 bg-transparent">
          <CardBody className=" flex items-center justify-center h-full">
            <Typography
              as={Link}
              to={`/movie/${movId}/title/${movTitle}/backdrops`}
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
  );
};

export default BackDropsMed;
