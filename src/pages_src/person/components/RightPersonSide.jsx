import React, { useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const RightPersonSide = ({ personDet, personWorks }) => {
  const navigate = useNavigate();

  return (
    <section className="lg:col-span-2 leading-loose	flex flex-col gap-14 text-center lg:text-start px-6">
      <Typography variant="h3">{personDet?.name} </Typography>

      <div>
        <Typography variant="h4" color="blue" className="inline-block">
          Biography :
        </Typography>
        <p>
          {personDet?.biography
            ? personDet?.biography
            : "no Biography for this person"}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Button
          size="sm"
          variant="outlined"
          color="blue"
          onClick={() => navigate(-1)}
          className="lowercase text-sm"
        >
          Back a Step
        </Button>
      </div>
    </section>
  );
};

export default RightPersonSide;
