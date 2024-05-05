import { Chip, Typography } from "@material-tailwind/react";

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";

const SideBar = ({ movDet }) => {
  const { social, keyWords } = useSelector((state) => state.movDetails);

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
          href={movDet?.homepage}
          color="blue"
          variant="h4"
          className={`hover:!text-light-blue-800 ${
            movDet?.homepage ? "" : "hidden"
          }`}
        >
          {" "}
          <FaHome />
        </Typography>
      </div>

      <div>
        <Typography variant="h5">Status</Typography>

        <Typography variant="paragraph" color="blue">
          {movDet?.status ? movDet.status : "-"}
        </Typography>
      </div>

      <div>
        <Typography variant="h5">Original Language</Typography>

        <Typography
          variant="paragraph"
          color="blue"
          className="uppercase text-center lg:text-start"
        >
          {movDet?.original_language ? movDet.original_language : "-"}
        </Typography>
      </div>

      <div>
        <Typography variant="h5">Budget</Typography>
        <Typography variant="paragraph" color="blue">
          ${movDet?.budget ? movDet.budget : "-"}
        </Typography>
      </div>

      <div>
        <Typography variant="h5">Revenue</Typography>
        <Typography variant="paragraph" color="blue">
          {movDet?.revenue ? movDet.revenue : "-"}
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

export default SideBar;
