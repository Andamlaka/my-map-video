// app/page.js
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Video from "./components/Video";

// Dynamically import Map with SSR disabled
const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
});

export default function Home() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🗺️ Travel Story Map</h1>
      <Map setSelectedCity={setSelectedCity} />
      <Video selectedCity={selectedCity}
      className="w-full max-w-3xl rounded-lg shadow-md"
       autoPlay
        loop
        muted
        playsInline
        controls
         />
    </main>
  );
}
