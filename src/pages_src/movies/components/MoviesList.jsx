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

const MoviesList = ({ content }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-6">
      {content?.map((mov, key) => (
        <Card
          key={key}
          className="mt-6 w-[19rem] bg-[#DEEEF5] shadow-lg dark:bg-[#212529] rounded-lg"
        >
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${mov.poster_path}`}
            alt="card-image"
            className="rounded-t-lg "
          />
          <CardBody>
            <Typography variant="h5" className="mb-2 dark:text-gray-200">
              {mov.title}
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
            <Button variant="outlined" color="blue" className="">
              Show Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MoviesList;
