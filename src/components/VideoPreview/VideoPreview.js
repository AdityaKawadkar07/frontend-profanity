import React from 'react';

const VideoPreview = ({ videoSrc }) => {
  return (
    <div className="w-full h-56 rounded shadow overflow-hidden bg-gray-800">
      {videoSrc ? (
        <video
          src={videoSrc}
          controls
          className="w-full h-full object-cover"
        />
      ) : (
        <p className="text-center text-base-content py-4">No video to preview</p>
      )}
    </div>
  );
};

export default VideoPreview;
