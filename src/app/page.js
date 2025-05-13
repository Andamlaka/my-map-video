"use client";

import Map from "./components/Map";
import Video from "./components/Video";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Map />
      <Video />
    </div>
  );
}
