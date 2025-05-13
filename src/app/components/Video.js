// app/components/Video.js
import { useEffect, useRef } from "react";

const videoSources = {
  london: "/videos/london.mp4",
  tokyo: "/videos/tokyo.mp4",
  hollywood: "/videos/hollywood.mp4",
};

export default function Video({ selectedCity }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load(); // Reload the new video source
      video
        .play()
        .catch((err) => console.warn("Autoplay failed:", err.message));
    }
  }, [selectedCity]);

  if (!selectedCity || !videoSources[selectedCity]) {
    return (
      <div className="mt-6 text-center text-gray-500">
        <p>Click a city marker on the map to watch its video 📽️</p>
      </div>
    );
  }

  return (
    <div className="mt-6 flex justify-center">
      <video
        ref={videoRef}
        className="w-full max-w-3xl rounded-lg shadow-md"
        autoPlay
        loop
        muted
        playsInline
        controls
      >
        <source src={videoSources[selectedCity]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
