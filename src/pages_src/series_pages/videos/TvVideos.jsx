import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import VideoTab from "../../movie_pages/videos/components/VideoTab";
import SecHeader from "../../components/SecHeader";
import Loading from "../../components/Loading";
import MessageError from "../../components/MessageError";
import { getTvVideos } from "../../../redux_system/slices/series_Slices/tvDetailsSlice";

const TvVideos = () => {
  //states
  const [tabs, setTabs] = useState([]);
  const [tabsDet, setTabsDet] = useState([]);
  const [activeTab, setActiveTab] = useState("Trailer");

  //navigate , params and dispatch
  const { tvId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //redux data
  const { videos, videosLoading, videosErr } = useSelector(
    (state) => state.tvDetails
  );

  //tabs view data
  const data = tabs.map((tab, i) => {
    return {
      label: `${tab} (${tabsDet[i]?.length ? tabsDet[i]?.length : "0"})`,
      value: tab,
      desc: <VideoTab tab={tab} video={tabsDet[i]} />,
    };
  });

  //tabs functions
  const handleTabs = () => {
    let newTabs = [...tabs];

    videos?.map((video) => {
      const check = newTabs.some((tab) => tab == video.type);

      !check && (newTabs = [...newTabs, video.type]);
    });
    setTabs(newTabs);
  };

  const handleVideos = () => {
    const newTabsDet = tabs.map((tab) => {
      return videos.filter((video) => video.type == tab);
    });

    setTabsDet(newTabsDet);
  };

  //useEffects
  useEffect(() => {
    dispatch(getTvVideos(tvId));
  }, []);

  useEffect(() => {
    handleTabs();
  }, [videos]);

  useEffect(() => {
    handleVideos();
  }, [tabs]);

  return (
    <div>
      <SecHeader />

      {videosLoading ? (
        <Loading />
      ) : videosErr ? (
        <MessageError err={videosErr} />
      ) : (
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none  bg-transparent p-0 overflow-auto flex items-center lg:justify-center mt-5 mx-10"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-purple-500 shadow-none rounded-none ",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`                w-auto px-4 py-1 ${
                  activeTab === value
                    ? "text-purple-500 border-purple-500"
                    : "dark:text-white"
                }`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      )}

      <div className="flex items-center justify-center my-4">
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
    </div>
  );
};

export default TvVideos;
