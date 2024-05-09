import React from "react";

const VideoTab = ({ video }) => {
  console.log(video);
  return (
    <div>
      {video?.map((vid, i) => (
        <iframe
          key={i}
          className="min-w-96 min-h-80"
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
