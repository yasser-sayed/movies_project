import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import MessageError from "./../../components/MessageError";
import Loading from "./../../components/Loading";
import SecHeader from "./../../components/SecHeader";
import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { getImgs } from "./../../../redux_system/slices/movies_Slices/movDetailsSlice";
import PosterTab from "./components/PosterTab";

const Posters = () => {
  //states
  const [tabs, setTabs] = useState([]);
  const [tabsDet, setTabsDet] = useState([]);
  const [activeTab, setActiveTab] = useState("No Language");

  //navigate , useParams and dispatch
  const { movId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //redux data
  const { posters, postersLoading, postersErr } = useSelector(
    (state) => state.movDetails
  );

  // tabs view data
  const data = tabs.map((tab, i) => {
    return {
      label: `${tab} (${tabsDet[i]?.length ? tabsDet[i]?.length : "0"})`,
      value: tab,
      desc: <PosterTab tab={tab} imgs={tabsDet[i]} />,
    };
  });

  //tabs functions
  const langName = new Intl.DisplayNames(["en"], { type: "language" });

  const handleTabs = () => {
    let newTabs = [...tabs];

    posters?.map((img) => {
      if (img.iso_639_1) {
        const check = newTabs.some((tab) => tab == langName.of(img.iso_639_1));

        !check && (newTabs = [...newTabs, langName.of(img.iso_639_1)]);
      } else {
        const check = newTabs.some((tab) => tab == "No Language");
        !check && (newTabs = [...newTabs, "No Language"]);
      }
    });
    setTabs(newTabs);
  };

  const handlePosters = () => {
    const noLangImgs = posters.filter((img) => img.iso_639_1 == null);
    const allLangImgs = posters.filter((img) => img.iso_639_1 != null);

    const newTabsDet = tabs.map((tab) => {
      if (tab == "No Language") {
        return noLangImgs;
      } else {
        return allLangImgs.filter((img) => langName.of(img.iso_639_1) == tab);
      }
    });

    setTabsDet(newTabsDet);
  };

  //useEffects
  useEffect(() => {
    dispatch(getImgs(movId));
  }, []);

  useEffect(() => {
    handleTabs();
  }, [posters]);

  useEffect(() => {
    handlePosters();
  }, [tabs]);

  return (
    <div>
      <SecHeader />

      {postersLoading ? (
        <Loading />
      ) : postersErr ? (
        <MessageError err={postersErr} />
      ) : (
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none  bg-transparent p-0 overflow-auto flex items-center  mt-5 mx-10"
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
                className={`                w-auto px-4 py-1  ${
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
export default Posters;
