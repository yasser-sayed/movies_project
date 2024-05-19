import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const EpisodeBody = ({ episode, cast, theme }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-12 my-6">
      <section>
        <Typography variant="h3">
          cast <span className="text-blue-500">{cast?.length}</span>
        </Typography>

        <div className="flex flex-wrap gap-10 items-center justify-center mt-6">
          {cast?.map((actor, i) => (
            <Card
              key={i}
              className="w-full max-w-[32rem] md:flex-row  bg-[#9daaf7] bg-opacity-50 dark:bg-[#252E2D]"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="md:m-0 md:w-2/5 shrink-0 md:rounded-r-none"
              >
                <Link to={`/person/${actor.id}/hisname/${actor.name}`}>
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
                  to={`/person/${actor.id}/hisname/${actor.name}`}
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
                  {actor?.character}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Typography variant="h3">
          crew <span className="text-blue-500">{episode?.length}</span>
        </Typography>

        <div className="flex flex-wrap gap-10 items-center justify-center mt-6">
          {episode?.map((actor, i) => (
            <Card
              key={i}
              className="w-full max-w-[32rem] md:flex-row  bg-[#9daaf7] bg-opacity-50 dark:bg-[#252E2D]"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="md:m-0 md:w-2/5 shrink-0 md:rounded-r-none"
              >
                <Link to={`/person/${actor.id}/hisname/${actor.name}`}>
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
                  to={`/person/${actor.id}/hisname/${actor.name}`}
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
                  {actor?.job}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EpisodeBody;
