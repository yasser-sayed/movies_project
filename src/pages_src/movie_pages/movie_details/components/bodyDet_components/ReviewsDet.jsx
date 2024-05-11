import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShowMoreText from "react-show-more-text";

const ReviewsDet = ({ theme, reviews }) => {
  const [activeTab, setActiveTab] = useState("Reviews");
  const { movId, movTitle } = useParams();

  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h4" color="blue">
        {" "}
        Social
      </Typography>

      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none  bg-transparent p-0 inline-block"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-purple-500 shadow-none rounded-none",
          }}
        >
          <Tab
            value="Reviews"
            onClick={() => setActiveTab("Reviews")}
            className={
              activeTab === "Reviews"
                ? "text-purple-500 border-purple-500"
                : "dark:text-white"
            }
          >
            Reviews ({reviews.length})
          </Tab>
        </TabsHeader>
        <TabsBody>
          {reviews.length ? (
            <TabPanel
              value="Reviews"
              className="flex justify-center text-center md:text-start md:justify-start items-center gap-6 bg-[#9daaf7] bg-opacity-50 dark:bg-[#252E2D] p-4 w-full rounded-b-xl rounded-tr-xl flex-wrap md:flex-nowrap "
            >
              <div className="bg-gray-400 rounded-full px-9 py-6  ">
                <Typography variant="h3" color="white">
                  R
                </Typography>{" "}
              </div>

              <div className="flex flex-col gap-3">
                <Typography variant="h4" color={theme ? "black" : "white"}>
                  A review by{" "}
                  <span className="text-blue-500">{reviews[0]?.author}</span>
                </Typography>

                <Typography
                  color={theme ? "black" : "white"}
                  variant="paragraph"
                >
                  Written by{" "}
                  <span className="text-blue-500">{reviews[0]?.author}</span> on{" "}
                  <span className="text-blue-500">
                    {reviews[0]?.created_at}
                  </span>{" "}
                </Typography>

                <Typography variant="h5" color="red">
                  Content :-
                </Typography>

                <ShowMoreText
                  className="text-black dark:text-white"
                  anchorClass="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  {reviews[0]?.content}
                </ShowMoreText>
              </div>
            </TabPanel>
          ) : (
            <TabPanel
              value="Reviews"
              className="flex justify-center text-center md:text-start md:justify-start items-center gap-6 bg-[#DEEEF5] dark:bg-[#252E2D] p-4 w-full rounded-b-xl rounded-tr-xl flex-wrap md:flex-nowrap "
            >
              <Typography
                variant="paragraph"
                className="py-5 text-black dark:text-white"
              >
                We don't have any reviews for{" "}
                <span className="font-bold text-blue-500">{movTitle}</span>
              </Typography>
            </TabPanel>
          )}
        </TabsBody>
      </Tabs>

      {reviews.length > 1 && (
        <Typography
          variant="paragraph"
          as={Link}
          to={`/movie/${movId}/title/${movTitle}/reviews`}
          className="text-blue-500 hover:text-blue-700 inline-block self-start"
        >
          Read All Reviews
        </Typography>
      )}
    </div>
  );
};

export default ReviewsDet;
