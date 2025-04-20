import React, { useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
  
    if (video.paused) {
      video.play();
      setIsPlaying(true);

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { 
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { 
        video.msRequestFullscreen();
      }
    } else {
      video.pause();
      setIsPlaying(false);
  
      if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
  };
  

  return (
    <div className="mt-20  relative grid grid-cols-1 md:grid-cols-2">
      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
          <span className="text-[#F28123]">Our</span> Value
        </h3>
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-gray-700">
          At the heart of everything we do is a simple belief: <strong>when farmers thrive, communities flourish.</strong> 
          We are dedicated to supporting the hands that feed the world — empowering farmers with the tools, resources, and respect they deserve.
          From improving access to technology and sustainable practices to creating fair market opportunities, we strive to uplift rural livelihoods and cultivate lasting impact.  
          <br />
          <span className="italic text-[#F28123] font-semibold">
            Because helping farmers isn’t just our mission — it’s our responsibility.
          </span>
        </p>
      </section>

      {/* Video Section */}
      <div className="relative w-full max-h-[80vh] overflow-hidden   p-5">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onClick={togglePlay}
          poster="https://images.unsplash.com/photo-1574717024453-3545e7cc3e1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/5523649/5523649-sd_640_360_24fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 pointer-events-none" />

        {/* Play Button */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 ease-in-out
                      p-5 rounded-full shadow-lg focus:outline-none"
            aria-label="Play video"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="w-10 h-10"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}

        {/* Click prompt */}
        <div className="absolute bottom-4 left-4 text-sm text-white bg-black/60 px-3 py-1 rounded-md shadow">
          Click video to {isPlaying ? 'pause' : 'play'}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
