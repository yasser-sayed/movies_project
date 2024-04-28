import React from "react";
import { Button, Typography } from "@material-tailwind/react";

const HeaderH = () => {
  return (
    <div className="my-5">
      <Typography variant="h2" color="blue" className="text-center">
        Home
      </Typography>

      <div className="flex flex-col lg:flex-row">
        <section className="flex my-2 flex-col items-center justify-center gap-5 lg:w-1/2">
          <Typography variant="h3" color="red">
            Sort By
          </Typography>

          <div className="flex justify-around items-center w-full">
            <Button
              size="sm"
              className="lowercase"
              variant="outlined"
              color="red"
            >
              Title
            </Button>
            <Button
              size="sm"
              className="lowercase"
              variant="outlined"
              color="red"
            >
              Poplarity
            </Button>
            <Button
              size="sm"
              className="lowercase"
              variant="outlined"
              color="red"
            >
              Date
            </Button>
            <Button
              size="sm"
              className="lowercase"
              variant="outlined"
              color="red"
            >
              Ratin
            </Button>
          </div>
        </section>

        <section className="flex my-2 flex-col items-center justify-center gap-5 lg:w-1/2">
          <Typography variant="h3" color="red">
            Sort Order
          </Typography>

          <div className="flex justify-around items-center w-full">
            <Button
              size="sm"
              className="lowercase"
              variant="outlined"
              color="red"
            >
              Descingin
            </Button>
            <Button
              size="sm"
              className="lowercase"
              variant="outlined"
              color="red"
            >
              Ascinding
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeaderH;
