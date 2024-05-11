import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Loading from "./../../../../../components/Loading";
import MessageError from "./../../../../../components/MessageError";

const VideoMed = ({ theme, videos, videosLoading, videosErr }) => {
  const { movId, movTitle } = useParams();

  return (
    <>
      <div className=" flex overflow-x-auto justify-stretch   pb-2 gap-5 w-full bg-[#9daaf7] bg-opacity-50 dark:bg-[#252E2D] p-3 rounded-xl">
        {videosLoading ? (
          <Loading />
        ) : videosErr ? (
          <MessageError err={videosErr} />
        ) : videos.length ? (
          videos
            .slice(0, 6)
            .map((vid, i) => (
              <iframe
                key={i}
                className="min-w-96 min-h-80"
                src={`https://www.youtube.com/embed/${vid.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ))
        ) : (
          <Typography variant="h4" color="blue">
            No video have been added.
          </Typography>
        )}

        {videos.length > 6 && (
          <Card className="min-w-48 bg-transparent">
            <CardBody className=" flex items-center justify-center h-full">
              <Typography
                as={Link}
                to={`/movie/${movId}/title/${movTitle}/videos`}
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
    </>
  );
};

export default VideoMed;
