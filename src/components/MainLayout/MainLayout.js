import React from "react";

import VideoUploader from "../VideoUploader/VideoUploader";
import DownloadSection from "../DownloadSection/DownloadSection";
import RemoveProfanityButton from "../RemoveButton/RemoveProfanityButton";

const MainLayout = () => {
    return (
      <div className="flex flex-col items-center">
        <div className="flex justify-between w-full p-6 max-w-6xl">
          {/* Left Section: Upload Video */}
          <div className="w-1/2 p-4 bg-base-100 rounded shadow-md">
            <VideoUploader />
          </div>
  
          {/* Right Section: Download Video */}
          <div className="w-1/2 p-4 bg-base-100 rounded shadow-md">
            <DownloadSection />
          </div>
        </div>
  
        {/* Middle Button */}
        <RemoveProfanityButton />
      </div>
    );
  };
  
  export default MainLayout;