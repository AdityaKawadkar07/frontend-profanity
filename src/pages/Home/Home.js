import React, { useState } from "react";
import VideoUploader from "../../components/VideoUploader/VideoUploader";
import VideoPreview from "../../components/VideoPreview/VideoPreview";
import RemoveProfanityButton from "../../components/RemoveButton/RemoveProfanityButton";

const Home = () => {
  const [videoURL, setVideoURL] = useState(""); // Store the uploaded video URL

  const handleVideoUpload = (url) => {
    setVideoURL(url); // Set the uploaded video URL when a new video is uploaded
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      <header className="flex justify-between items-center w-full px-8 py-4">
        <h1 className="text-1xl font-bold">Purity in Entertainment</h1>
      </header>

      <main className="flex flex-col items-center space-y-8 w-full">
        <div className="flex flex-wrap justify-center space-x-8">
          {/* Left Video Preview: Show the uploaded video */}
          <div className="flex flex-col items-center space-y-4">
            {/* If videoURL is set, show it in the left side */}
            <VideoPreview videoURL={videoURL} /> {/* Left side: Display uploaded video */}
            <VideoUploader onVideoUpload={handleVideoUpload} />
          </div>

          {/* Right Video Preview: Original right-side preview remains unchanged */}
          <div className="flex flex-col items-center space-y-4">
            {/* This remains as the default, showing the uploaded video if needed */}
            <VideoPreview videoURL={null} />
          </div>
        </div>

        <RemoveProfanityButton />
      </main>
    </div>
  );
};

export default Home;
