import React from "react";

const VideoTab = ({ video }) => {
  return (
    <div className="flex flex-col justify-center items-center px-12 mt-10 gap-4">
      {video?.map((vid, i) => (
        <iframe
          key={i}
          className="w-full h-72 rounded-lg"
          src={`https://www.youtube.com/embed/${vid?.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
};

export default VideoTab;
