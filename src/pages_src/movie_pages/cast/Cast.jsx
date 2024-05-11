import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCredits } from "./../../../redux_system/slices/movies_Slices/movDetailsSlice";

import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import TabView from "./components/TabView";
import MessageError from "./../../components/MessageError";
import Loading from "./../../components/Loading";
import SecHeader from "./../../components/SecHeader";

const Cast = () => {
  //tabs State
  const [tabs, setTabs] = useState(["Cast"]);
  const [activeTab, setActiveTab] = useState("Cast");

  //redux data
  const { credits, creditsLoading, creditsErr } = useSelector(
    (state) => state.movDetails
  );

  //params, dispatch and navigate
  const { movId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //tabs Config
  const data = tabs.map((tab) => {
    return {
      label: tab,
      value: tab,
      desc: <TabView tab={tab} credits={credits} />,
    };
  });

  const getTabs = () => {
    let newTabs = [...tabs];

    credits?.crew.map((cre) => {
      const check = newTabs.some((tab) => tab == cre.department);

      !check && (newTabs = [...newTabs, cre.department]);
    });

    setTabs(newTabs);
  };

  useEffect(() => {
    getTabs();
  }, [credits]);

  //main useEffect
  useEffect(() => {
    dispatch(getCredits(movId));
  }, []);

  return (
    <div>
      <SecHeader />

      {creditsLoading ? (
        <Loading />
      ) : creditsErr ? (
        <MessageError err={creditsErr} />
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

export default Cast;
