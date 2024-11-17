import React from 'react';
import VideoPreview from '../VideoPreview/VideoPreview';

const DownloadSection = () => {
  const handleDownload = () => {
    // Handle video download logic here
  };

  return (
    <div className="flex flex-col items-center">
      
      <VideoPreview />
      <h2 className="text-lg font-bold mb-2">Processed Video</h2>
      <button className="btn btn-primary mt-4" >
        Download
      </button>
    </div>
  );
};

export default DownloadSection;
