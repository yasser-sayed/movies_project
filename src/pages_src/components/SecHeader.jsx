import { Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovDet } from "../../redux_system/slices/movies_Slices/movDetailsSlice";
import { getTvDet } from "../../redux_system/slices/series_Slices/tvDetailsSlice";

const SecHeader = () => {
  const { movDet } = useSelector((state) => state.movDetails);
  const { tvDet } = useSelector((state) => state.tvDetails);

  const { movId, tvId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    movId ? dispatch(getMovDet(movId)) : dispatch(getTvDet(tvId));
  }, []);
  return (
    <header className="flex gap-4 items-center justify-center md:justify-start flex-col md:flex-row text-center md:text-start max-w-screen-xl mx-auto bg-[#9daaf7] bg-opacity-50 dark:bg-[#212529] py-4 px-10 lg:rounded-lg">
      <img
        width="110px"
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${
          movDet?.poster_path ? movDet?.poster_path : tvDet?.poster_path
        }`}
        alt="poster"
      />

      <div>
        <Typography variant="h4">
          {movDet?.title ? movDet?.title : tvDet?.name}{" "}
          <span className="text-gray-600">
            (
            {movDet?.release_date
              ? movDet?.release_date?.slice(0, 4)
              : tvDet?.last_air_date?.slice(0, 4)}
            )
          </span>
        </Typography>

        <Typography
          as={Link}
          to={-1}
          variant="paragraph"
          className="text-gray-600 hover:text-gray-900  dark:hover:text-gray-400 inline-block"
        >
          <FaArrowLeftLong className="inline-block text-xs" /> back to main
        </Typography>
      </div>
    </header>
  );
};

export default SecHeader;
