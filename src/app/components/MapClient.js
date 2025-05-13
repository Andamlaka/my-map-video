"use client";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapClient() {
  useEffect(() => {
    const map = L.map("map").setView([37.7749, -122.4194], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    L.marker([37.7749, -122.4194])
      .addTo(map)
      .bindPopup("📍 San Francisco")
      .openPopup();

    L.control.scale().addTo(map);
    L.control.zoom({ position: "topright" }).addTo(map);
  }, []);

  return (
    <div
      id="map"
      className="w-full h-[500px] rounded-lg border border-gray-300 shadow-lg z-10"
    />
  );
}
