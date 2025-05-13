"use client";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

export default function MapClient({ setSelectedCity }) {
  useEffect(() => {
    // Prevent map from being initialized multiple times
    if (L.DomUtil.get("map")?._leaflet_id != null) {
      return;
    }

    const map = L.map("map").setView([37.7749, -122.4194], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const cities = [
      {
        name: "London, United Kingdom",
        coords: [51.5074, -0.1278],
        key: "london",
      },
      {
        name: "Tokyo, Japan",
        coords: [35.6895, 139.6917],
        key: "tokyo",
      },
      {
        name: "Hollywood, Los Angeles, USA",
        coords: [34.0928, -118.3287],
        key: "hollywood",
      },
    ];

    cities.forEach((city) => {
      const marker = L.marker(city.coords).addTo(map);
      marker.bindPopup(city.name);
      marker.on("click", () => {
        setSelectedCity(city.key);
      });
    });

    L.control.scale().addTo(map);
  }, [setSelectedCity]);

  return (
    <div
      id="map"
      className="w-full h-[500px] rounded-lg border border-gray-300 shadow-lg z-10"
    />
  );
}
