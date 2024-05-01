import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const PageError = () => {
  return (
    <>
      <section className="flex items-center h-screen p-16 bg-transparent">
        <div className="container flex flex-col items-center ">
          <div className="flex flex-col gap-6 max-w-md text-center">
            <Typography
              variant="h2"
              className="font-extrabold  text-gray-600 dark:text-gray-100"
            >
              <span className="sr-only">Error</span>404
            </Typography>
            <Typography
              variant="paragraph"
              className=" md:text-3xl dark:text-gray-300"
            >
              Sorry, we couldn't find this page.
            </Typography>
            <Typography as={Link} to="/">
              <Button color="blue" size="lg" variant="outlined">
                Back to home
              </Button>
            </Typography>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageError;
