// app/components/Map.js
"use client";
import dynamic from "next/dynamic";

// Load MapClient only in the browser
const MapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
});

export default function Map({ setSelectedCity }) {
  return <MapClient setSelectedCity={setSelectedCity} />;
}
