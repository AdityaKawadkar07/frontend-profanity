import React, { useState } from 'react';
import VideoPreview from '../VideoPreview/VideoPreview';

const VideoUploader = () => {
  const [videoFile, setVideoFile] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(URL.createObjectURL(file));
    } else {
      alert('Please upload a valid video file.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      
      {videoFile ? (
        <VideoPreview videoSrc={videoFile} />
      ) : (
        <div className="w-full h-56 bg-gray-200 rounded shadow flex items-center justify-center">
          <p className="text-base-content">No video selected</p>
        </div>
      )}
    <h2 className="text-lg font-bold mb-4">Upload Original Video</h2>
      <input
        type="file"
        accept="video/*"
        className="mb-4 btn btn-accent"
        onChange={handleUpload}
      />
    </div>
  );
};

export default VideoUploader;
