import React, { useState } from "react";

const VideoUploader = ({ onVideoUpload }) => {
  const [mode, setMode] = useState("trim"); // Modes: "trim" or "mute"
  const [videoURL, setVideoURL] = useState(null); // For storing the uploaded video URL

  const toggleMode = () => {
    setMode(mode === "trim" ? "mute" : "trim");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoURL(videoURL); // Set the uploaded video URL
      onVideoUpload(videoURL); // Pass the video URL to the parent component
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Video Upload Section */}
      <label className="btn btn-accent cursor-pointer">
        Upload Video
        <input
          type="file"
          accept="video/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {/* Toggle Mode Button */}
      <button
        className={`btn ${mode === "trim" ? "btn-success" : "btn-warning"}`}
        onClick={toggleMode}
      >
        {mode === "trim" ? "Set to Trim Content" : "Set to Mute Content"}
      </button>
    </div>
  );
};

export default VideoUploader;
