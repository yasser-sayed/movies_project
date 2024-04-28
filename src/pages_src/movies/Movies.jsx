import React, { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Movies = () => {
  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
    className: "rounded-full",
  });

  const next = () => {
    if (active === 15) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div>
      Movies
      {/* <div className="flex items-center gap-4">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton {...getItemProps(1)}>1</IconButton>
          <IconButton {...getItemProps(2)}>2</IconButton>
          <IconButton {...getItemProps(3)}>3</IconButton>
          <IconButton {...getItemProps(4)}>4</IconButton>
          <IconButton {...getItemProps(5)}>5</IconButton>
          <IconButton {...getItemProps(6)}>6</IconButton>
          <IconButton {...getItemProps(7)}>7</IconButton>
          <IconButton {...getItemProps(8)}>8</IconButton>
          <IconButton {...getItemProps(9)}>9</IconButton>
          <IconButton {...getItemProps(10)}>10</IconButton>
          <IconButton {...getItemProps(11)}>11</IconButton>
          <IconButton {...getItemProps(12)}>12</IconButton>
          <IconButton {...getItemProps(13)}>13</IconButton>
          <IconButton {...getItemProps(14)}>14</IconButton>
          <IconButton {...getItemProps(15)}>15</IconButton>
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === 15}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div> */}
    </div>
  );
};

export default Movies;
