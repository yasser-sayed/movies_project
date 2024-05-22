import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const SeriesList = ({ content }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-6">
      {content?.map((mov, key) => (
        <Card
          key={key}
          className="mt-6 w-[19rem] bg-[#9daaf7] bg-opacity-50 shadow-lg dark:bg-[#212529] rounded-lg"
        >
          <img
            src={
              mov.poster_path
                ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${mov.poster_path}`
                : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
            }
            alt="card-image"
            className="rounded-t-lg "
          />
          <CardBody>
            <Typography variant="h5" className="mb-2 dark:text-gray-200">
              {mov.name}
              {""}
            </Typography>

            <div className="flex justify-between items-center">
              <Typography
                variant="h6"
                className="dark:text-gray-200 font-semibold"
              >
                Rate : <span className="text-blue-500">{mov.vote_average}</span>
              </Typography>

              <Rating
                emptySymbol={<IoStarOutline />}
                fullSymbol={<IoStar className="text-yellow-600" />}
                readonly
                initialRating={mov.vote_average}
                stop={10}
                step={2}
                fractions={2}
                className="text-gray-300"
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to={`/tv/${mov.id}/name/${mov.name}`}>
              <Button variant="outlined" color="blue" className="">
                Show Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SeriesList;
