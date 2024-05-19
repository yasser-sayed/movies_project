import { Typography } from "@material-tailwind/react";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const LeftPersonSide = ({ personDet, social }) => {
  return (
    <div className="">
      <div className="flex items-center justify-center w-full px-12 md:px-10 lg:px-6">
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${personDet?.profile_path}`}
          alt="profile photo"
          className="w-full rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-6 px-4 items-center lg:items-start my-8 text-center lg:text-start">
        <div className=" flex gap-8 items-center ">
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
            href={`https://www.tiktok.com/@${social?.tiktok_id}`}
            color="blue"
            variant="h4"
            className={`hover:!text-light-blue-800 ${
              social?.tiktok_id ? "" : "hidden"
            }`}
          >
            {" "}
            <FaTiktok />
          </Typography>

          <Typography
            as="a"
            target="_blank"
            href={`https://www.youtube.com/${social?.youtube_id}`}
            color="blue"
            variant="h4"
            className={`hover:!text-light-blue-800 ${
              social?.youtube_id ? "" : "hidden"
            }`}
          >
            {" "}
            <FaYoutube />
          </Typography>

          <Typography
            as="a"
            target="_blank"
            href={personDet?.homepage}
            color="blue"
            variant="h4"
            className={`hover:!text-light-blue-800 ${
              personDet?.homepage ? "" : "hidden"
            }`}
          >
            {" "}
            <FaHome />
          </Typography>
        </div>

        <div>
          <Typography variant="h5">Known for</Typography>

          <Typography variant="paragraph" color="blue">
            {personDet?.known_for_department
              ? personDet.known_for_department
              : "-"}
          </Typography>
        </div>

        <div>
          <Typography variant="h5">Gender</Typography>

          <Typography variant="paragraph" color="blue">
            {personDet?.gender == 1
              ? "Female"
              : personDet?.gender == 2
              ? "Male"
              : "-"}
          </Typography>
        </div>

        <div>
          <Typography variant="h5">Birthday </Typography>

          <Typography variant="paragraph" color="blue">
            {personDet?.birthday ? personDet.birthday : "-"}
          </Typography>
        </div>

        <div>
          <Typography variant="h5">Place of birth</Typography>
          <Typography variant="paragraph" color="blue">
            {personDet?.place_of_birth ? personDet.place_of_birth : "-"}
          </Typography>
        </div>

        <div>
          <Typography variant="h5">Also known as</Typography>

          {personDet?.also_known_as.length
            ? personDet.also_known_as.map((nickName) => (
                <Typography key={nickName} variant="paragraph" color="blue">
                  {nickName}
                </Typography>
              ))
            : "-"}
        </div>
      </div>
    </div>
  );
};

export default LeftPersonSide;
