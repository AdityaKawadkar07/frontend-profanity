import React, { useState } from "react";

const RemoveProfanityButton = () => {
  const [loading, setLoading] = useState(false);
  const [badWords, setBadWords] = useState("");

  const handleProfanityRemoval = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setBadWords("badword1, badword2, badword3");
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <button className="btn btn-accent" onClick={handleProfanityRemoval}>
        Remove Profanity
      </button>
      {loading ? (
        <div className="loading loading-spinner"></div>
      ) : (
        
        <textarea
          readOnly
          className="textarea textarea-bordered w-full max-w-md"
          value={badWords}
          placeholder="Detected bad words will appear here..."
        />
      )}
    </div>
  );
};

export default RemoveProfanityButton;
