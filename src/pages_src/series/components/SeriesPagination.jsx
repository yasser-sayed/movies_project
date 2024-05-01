import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { IconButton, Typography } from "@material-tailwind/react";
import React from "react";
import { useDispatch } from "react-redux";
import { getPopSeries } from "../../../redux_system/slices/series_Slices/seriesSlice";

const SeriesPagination = ({ active, setActive }) => {
  const dispatch = useDispatch();

  const next = () => {
    if (active >= 500) return;

    dispatch(getPopSeries(active + 1));

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    dispatch(getPopSeries(active - 1));

    setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-8 justify-center my-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        color="blue"
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="blue" className="font-normal">
        Page{" "}
        <strong className="text-gray-900 dark:text-red-500">{active}</strong> of{" "}
        <strong className="text-gray-900 dark:text-red-500">500</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        color="blue"
        onClick={next}
        disabled={active >= 500}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
};

export default SeriesPagination;
