import React from "react";

const VideoPreview = ({ videoURL }) => {
  return (
    <div className="flex justify-center">
      <video
        className="rounded-lg shadow-lg w-96 h-64 lg:w-[500px] lg:h-[300px]"
        controls
        src={videoURL || ""}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPreview;
