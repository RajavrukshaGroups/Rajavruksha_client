
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoModal = ({ videoId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const handleError = () => {
    alert("An error occurred. Please check if the video is available.");
  };

  return (
    <div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
        onError={handleError}
      />
      <button className="video video-popup mfp-iframe" onClick={openModal}>
        <i className="fas fa-play"></i>
      </button>
    </div>
  );
};

export default VideoModal;
