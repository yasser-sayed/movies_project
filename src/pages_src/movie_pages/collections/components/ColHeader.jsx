import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ColHeader = ({ collec }) => {
  const navigate = useNavigate();

  return (
    <div
      className="headImg min-h-[85vh] py-3  px-4 md:px-8  bg-center bg-cover relative flex items-center justify-center flex-col gap-10 "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${collec?.backdrop_path})`,
      }}
    >
      <Typography
        variant="h3"
        color="blue"
        className="z-10 relative text-center"
      >
        Collection - Details
      </Typography>

      <div className="z-10 relative flex flex-wrap items-center justify-center text-white font-bold">
        <section className="px-8">
          <img
            className="w-[340px]"
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${collec?.poster_path}`}
            alt=""
          />
        </section>

        <section className=" lg:w-3/5 leading-loose	flex flex-col gap-6 text-center lg:text-start">
          <Typography variant="h3">{collec?.name} </Typography>

          <div>
            <Typography variant="h4" color="blue">
              Over View :-
            </Typography>
            <span>{collec?.overview}</span>
          </div>

          <div>
            <Typography variant="h4" color="blue" className="inline-block">
              Number Of Parts :{" "}
              <span className="text-white">{collec?.parts.length}</span>
            </Typography>
          </div>

          <div className="flex items-center justify-center">
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
        </section>
      </div>
    </div>
  );
};

export default ColHeader;
