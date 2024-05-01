import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const HeaderH = () => {
  const { theme } = useSelector((state) => state.config);

  return (
    <div className="my-5">
      <Typography variant="h2" color="blue" className="text-center">
        Home
      </Typography>

      <div className="flex flex-col lg:flex-row">
        <section className="flex my-2 flex-col items-center justify-center gap-5 lg:w-1/2">
          <Typography variant="h3" color={theme ? "black" : "red"}>
            Sort By
          </Typography>

          <div className="flex justify-around items-center w-full">
            <Button
              size="sm"
              className="lowercase"
              variant="outlined"
              color={theme ? "black" : "red"}
            >
              Title
            </Button>
            <Button
              size="sm"
              className="lowercase"
              variant="outlined"
              color={theme ? "black" : "red"}
            >
              Poplarity
            </Button>
            <Button
              size="sm"
              className="lowercase"
              variant="outlined"
              color={theme ? "black" : "red"}
            >
              Date
            </Button>
            <Button
              size="sm"
              className="lowercase"
              variant="outlined"
              color={theme ? "black" : "red"}
            >
              Ratin
            </Button>
          </div>
        </section>

        <section className="flex my-2 flex-col items-center justify-center gap-5 lg:w-1/2">
          <Typography variant="h3" color={theme ? "black" : "red"}>
            Sort Order
          </Typography>

          <div className="flex justify-around items-center w-full">
            <Button
              size="sm"
              className="lowercase"
              variant="outlined"
              color={theme ? "black" : "red"}
            >
              Descingin
            </Button>
            <Button
              size="sm"
              className="lowercase"
              variant="outlined"
              color={theme ? "black" : "red"}
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
