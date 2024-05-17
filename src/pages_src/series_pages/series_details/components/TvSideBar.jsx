import { Chip, Typography } from "@material-tailwind/react";

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";

const TvSideBar = ({ tvDet }) => {
  const { social, keyWords } = useSelector((state) => state.tvDetails);

  return (
    <section className="col-span-full lg:col-span-3 flex flex-col gap-6 px-4 items-center lg:items-start">
      <div className=" flex gap-12 items-center ">
        <Typography
          as="a"
          target="_blank"
          href={`https://www.facebook.com/${social?.facebook_id}`}
          color="blue"
          variant="h4"
          className={`hover:!text-light-blue-800 ${
            social?.facebook_id ? "" : "hidden"
          }`}
        >
          {" "}
          <FaFacebook />
        </Typography>

        <Typography
          as="a"
          target="_blank"
          href={`https://www.instagram.com/${social?.instagram_id}`}
          color="blue"
          variant="h4"
          className={`hover:!text-light-blue-800 ${
            social?.instagram_id ? "" : "hidden"
          }`}
        >
          {" "}
          <FaInstagram />
        </Typography>

        <Typography
          as="a"
          target="_blank"
          href={`https://www.twitter.com/${social?.twitter_id}`}
          color="blue"
          variant="h4"
          className={`hover:!text-light-blue-800 ${
            social?.twitter_id ? "" : "hidden"
          }`}
        >
          {" "}
          <FaTwitter />
        </Typography>

        <Typography
          as="a"
          target="_blank"
          href={tvDet?.homepage}
          color="blue"
          variant="h4"
          className={`hover:!text-light-blue-800 ${
            tvDet?.homepage ? "" : "hidden"
          }`}
        >
          {" "}
          <FaHome />
        </Typography>
      </div>

      <div>
        <Typography variant="h5">Original Name</Typography>

        <Typography variant="paragraph" color="blue">
          {tvDet?.original_name ? tvDet.original_name : "-"}
        </Typography>
      </div>

      <div>
        <Typography variant="h5">Status</Typography>

        <Typography variant="paragraph" color="blue">
          {tvDet?.status ? tvDet.status : "-"}
        </Typography>
      </div>

      <div>
        <Typography variant="h5">Original Language</Typography>

        <Typography
          variant="paragraph"
          color="blue"
          className="uppercase text-center lg:text-start"
        >
          {tvDet?.original_language ? tvDet.original_language : "-"}
        </Typography>
      </div>

      <div>
        <Typography variant="h5">NetWork</Typography>
        <div className="flex flex-wrap gap-5 items-center">
          {tvDet?.networks
            ? tvDet.networks.map((network) => (
                <img
                  key={network.id}
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${network.logo_path}`}
                  alt="network logo"
                  className="w-1/12 mt-3"
                />
              ))
            : "-"}
        </div>
      </div>

      <div>
        <Typography variant="h5">Type</Typography>
        <Typography variant="paragraph" color="blue">
          {tvDet?.type ? tvDet.type : "-"}
        </Typography>
      </div>

      <div>
        <Typography variant="h5">Number Of Episodes</Typography>
        <Typography variant="paragraph" color="blue">
          {tvDet?.number_of_episodes
            ? `${tvDet.number_of_episodes} Episodes`
            : "-"}
        </Typography>
      </div>

      <div>
        <Typography variant="h5">Number Of Seasons</Typography>
        <Typography variant="paragraph" color="blue">
          {tvDet?.number_of_seasons
            ? `${tvDet.number_of_seasons} Seasons`
            : "-"}
        </Typography>
      </div>

      <div>
        <Typography variant="h3" color="blue">
          Key Words
        </Typography>

        <div className="flex flex-wrap justify-center items-center gap-4 py-4">
          {keyWords.map((key, i) => (
            <Chip
              value={`${key.name}`}
              key={i}
              variant="gradient"
              size="sm"
              color="blue"
              className="lowercase text-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TvSideBar;
