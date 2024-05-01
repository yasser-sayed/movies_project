import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import MessageError from "../components/MessageError";
import SeriesList from "./components/SeriesList";
import SeriesPagination from "./components/SeriesPagination";
import { useDispatch, useSelector } from "react-redux";
import { getPopSeries } from "../../redux_system/slices/series_Slices/seriesSlice";

const Series = () => {
  const [active, setActive] = useState(1);
  const { popSeries, popSLoading, popSErr } = useSelector(
    (state) => state.popularSeries
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopSeries());
  }, []);

  return (
    <div className="px-10 md:px-16 my-12 text-center min-h-[80vh]">
      <section>
        <Typography variant="h1">Series</Typography>

        <Typography variant="h2" className="font-thin mt-1">
          page <span className="text-blue-500">{active}</span> of{" "}
          <span className="text-blue-500">500</span>
        </Typography>
      </section>

      {popSLoading ? (
        <Loading />
      ) : popSErr ? (
        <MessageError err={popSErr} />
      ) : (
        <SeriesList content={popSeries} />
      )}

      <SeriesPagination active={active} setActive={setActive} />
    </div>
  );
};

export default Series;
