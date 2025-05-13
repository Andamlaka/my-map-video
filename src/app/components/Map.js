"use client";
import { useState } from "react";
import Map, { Marker } from "react-map-gl";

export default function MapComponent() {
  const [viewState, setViewState] = useState({
    longitude: 37.77,
    latitude: -122.42,
    zoom: 10,
  });

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-gray-900">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        className="w-full max-w-4xl h-[500px] rounded-lg shadow-lg"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      >
        <Marker longitude={37.77} latitude={-122.42} color="red" />
      </Map>
    </div>
  );
}
