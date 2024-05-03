import React from "react";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
import Loading from "../../components/Loading";
import { AiFillFileAdd } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const MovHeader = ({ mov, credits, videos }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);

  return (
    <div
      className="headImg min-h-[85vh] py-3  px-4 md:px-8  bg-center bg-cover relative flex items-center justify-center flex-col gap-10 "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${mov.backdrop_path})`,
      }}
    >
      <Typography
        variant="h3"
        color="blue"
        className="z-10 relative text-center"
      >
        Movies - Details
      </Typography>

      <div className="z-10 relative flex flex-wrap items-center justify-center text-white font-bold">
        <section className="px-8">
          <img
            className="w-[340px]"
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${mov.poster_path}`}
            alt=""
          />
        </section>

        <section className=" lg:w-3/5 leading-loose	flex flex-col gap-6 text-center lg:text-start">
          <Typography variant="h3">{mov.original_title} </Typography>

          <span className="flex items-center flex-wrap justify-center gap-1 lg:self-start">
            {mov.release_date}{" "}
            <span className="uppercase">({mov.original_language})</span>{" "}
            <FaHandPointRight className="text-yellow-700" />{" "}
            {mov.genres?.map((gen, i) => (
              <span key={i}>
                {!i == 0 && ","}
                {gen.name}
              </span>
            ))}{" "}
            <FaHandPointLeft className="text-yellow-700" />{" "}
            {Math.floor(mov.runtime / 60)}h{" "}
            {Math.round((mov.runtime / 60 - Math.floor(mov.runtime / 60)) * 60)}
            m
          </span>

          <div>
            <Typography variant="h4" color="blue" className="inline-block">
              Over View :
            </Typography>
            <span>{mov.overview}</span>
          </div>

          <div>
            <Typography variant="h4" color="blue">
              Casting :{" "}
            </Typography>

            <div className="flex flex-col gap-5 text-center">
              {/* firstSection */}
              <section className="flex items-center justify-evenly flex-col md:flex-row">
                <div>
                  <Typography variant="h5">
                    {" "}
                    {credits?.cast[0]?.name}
                  </Typography>
                  <Typography variant="h6" className="text-yellow-700">
                    {" "}
                    {credits?.cast[0]?.known_for_department}
                  </Typography>
                </div>

                <p>||</p>

                <div>
                  <Typography variant="h5">
                    {" "}
                    {credits?.cast[1]?.name}
                  </Typography>
                  <Typography variant="h6" className="text-yellow-700">
                    {" "}
                    {credits?.cast[1]?.known_for_department}
                  </Typography>
                </div>
              </section>
              {/* secSection */}
              <section className="flex items-center justify-evenly flex-col md:flex-row">
                <div>
                  <Typography variant="h5">
                    {" "}
                    {credits?.crew[0]?.name}
                  </Typography>
                  <Typography variant="h6" className="text-yellow-700">
                    {" "}
                    {credits?.crew[0]?.known_for_department}
                  </Typography>
                </div>

                <p>||</p>

                <div>
                  <Typography variant="h5">
                    {" "}
                    {credits?.crew[1]?.name}
                  </Typography>
                  <Typography variant="h6" className="text-yellow-700">
                    {" "}
                    {credits?.crew[1]?.known_for_department}
                  </Typography>
                </div>

                <p>||</p>

                <div>
                  <Typography variant="h5">
                    {" "}
                    {credits?.crew[2]?.name}
                  </Typography>
                  <Typography variant="h6" className="text-yellow-700">
                    {" "}
                    {credits?.crew[2]?.known_for_department}
                  </Typography>
                </div>
              </section>

              <section className="flex items-center justify-evenly">
                <button className="flex flex-col gap-1 items-center justify-center">
                  <AiFillFileAdd className="text-green-700 text-2xl" />
                  <p>Add to Watch List</p>
                </button>
                <button className="flex flex-col gap-1 items-center justify-center">
                  <FaRegStar className="text-yellow-700 text-2xl" />
                  <p>Rate</p>
                </button>
                <button
                  className="flex flex-col gap-1 items-center justify-center"
                  onClick={handleOpen}
                >
                  <FaCirclePlay className="text-red-700 text-2xl" />
                  <p>Watch Trailer</p>
                </button>
              </section>
            </div>
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

      <Dialog
        open={open}
        handler={handleOpen}
        className="!w-auto !max-w-none !min-w-0 "
      >
        <iframe
          className="max-w-[560px] max-h-[315px] w-screen h-screen"
          src={`https://www.youtube.com/embed/${videos?.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Dialog>
    </div>
  );
};

export default MovHeader;

//https://image.tmdb.org/t/p/w600_and_h900_bestv2
//https://image.tmdb.org/t/p/w600_and_h900_bestv2
