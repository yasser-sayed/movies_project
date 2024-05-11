import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TabView = ({ tab, credits }) => {
  const [newCredits, setNewCredits] = useState([]);
  const { theme } = useSelector((state) => state.config);

  const filterCredits = () => {
    tab == "Cast"
      ? setNewCredits(credits?.cast)
      : setNewCredits(credits?.crew.filter((cre) => cre.department == tab));
  };

  useEffect(() => {
    filterCredits();
  }, [credits]);
  return (
    <div className="mx-12 my-10">
      <Typography variant="h3" color="blue" className="my-4">
        {tab} ({newCredits.length})
      </Typography>
      <div className="flex flex-wrap gap-10 justify-center items-center ">
        {newCredits?.map((actor, i) => (
          <Card
            key={i}
            className="w-full max-w-[32rem] md:flex-row  bg-[#9daaf7] bg-opacity-50 dark:bg-[#252E2D]"
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="md:m-0 md:w-2/5 shrink-0 md:rounded-r-none"
            >
              <Link to="/">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`
                      : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                  }
                  alt="profile-picture"
                  className="h-full w-full object-cover"
                />
              </Link>
            </CardHeader>

            <CardBody className="text-center flex flex-col items-center justify-center">
              <Typography
                as={Link}
                to="/"
                variant="h5"
                color={theme ? "blue-gray" : "white"}
                className="mb-2"
              >
                {actor?.name}
              </Typography>

              <Typography
                color={theme ? "blue-gray" : "gray"}
                className="font-medium"
                textGradient
              >
                {tab == "Cast" ? actor?.character : actor?.job}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TabView;
