import React from "react";
import Slider from "react-slick";
import { Typography } from "@material-tailwind/react";
import MessageError from "../../components/MessageError";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

const SliderH = ({ content, title, movie, popLoading, popErr }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 750,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,

          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Typography variant="h2" color="blue" className="my-8">
        {title}
      </Typography>

      {popLoading ? (
        <Loading />
      ) : popErr ? (
        <MessageError err={popErr} />
      ) : (
        <Slider {...settings}>
          {content?.map((mov, key) => (
            <div key={key}>
              <Link
                to={
                  movie
                    ? `/movie/${mov.id}/title/${mov.title}`
                    : `/tv/${mov.id}/name/${mov.name}`
                }
              >
                <img
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${mov.poster_path}`}
                  alt="movie image"
                  className="px-4"
                />
              </Link>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default SliderH;
