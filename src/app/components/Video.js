"use client";

export default function Video() {
  return (
    <div className="flex justify-center items-center mt-6">
      <video
        className="w-full max-w-4xl rounded-lg shadow-xl border border-gray-300"
        controls
        autoPlay
        muted
        loop
      >
        <source src="/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
