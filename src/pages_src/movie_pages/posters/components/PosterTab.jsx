import React from "react";

const PosterTab = ({ imgs }) => {
  return (
    <div className="flex justify-center items-center gap-4 flex-wrap ">
      {imgs?.map((img, i) => (
        <img
          key={i}
          className="w-60"
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${img.file_path}`}
          alt="poster"
        />
      ))}
    </div>
  );
};

export default PosterTab;
