import React, { useState } from "react";
import VideoMed from "./mediaDet_components/VideoMed";
import BackDropsMed from "./mediaDet_components/BackDropsMed";
import PostersMed from "./mediaDet_components/PostersMed";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";

const MediaDet = () => {
  const {
    videos,
    posters,
    backDrops,
    videosLoading,
    videosErr,
    postersLoading,
    postersErr,
    BackDropsLoading,
    BackDropsErr,
  } = useSelector((state) => state.movDetails);
  const { theme } = useSelector((state) => state.config);

  const [activeTab, setActiveTab] = useState("Videos");
  const data = [
    {
      label: `Videos (${videos.length})`,
      value: "Videos",
      desc: (
        <VideoMed
          videos={videos}
          videosLoading={videosLoading}
          videosErr={videosErr}
          theme={theme}
        />
      ),
    },
    {
      label: `Back Drops (${backDrops.length})`,
      value: "Back Drops",
      desc: (
        <BackDropsMed
          theme={theme}
          backDrops={backDrops}
          BackDropsLoading={BackDropsLoading}
          BackDropsErr={BackDropsErr}
        />
      ),
    },
    {
      label: `Posters (${posters.length})`,
      value: "Posters",
      desc: (
        <PostersMed
          theme={theme}
          posters={posters}
          postersLoading={postersLoading}
          postersErr={postersErr}
        />
      ),
    },
  ];

  return (
    <div className="">
      <Typography variant="h4" color="blue" className="my-4">
        Media
      </Typography>

      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none  bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-purple-500 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`                 ${
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
    </div>
  );
};

export default MediaDet;
