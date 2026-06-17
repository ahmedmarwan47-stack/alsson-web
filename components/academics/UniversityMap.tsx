"use client";

import { Map, MapMarker, MarkerContent, MarkerLabel } from "@/components/ui/Map";

const UNIVERSITIES = [
  { name: "Harvard", longitude: -71.117, latitude: 42.374 },
  { name: "MIT", longitude: -71.092, latitude: 42.36 },
  { name: "Stanford", longitude: -122.17, latitude: 37.43 },
  { name: "Oxford", longitude: -1.26, latitude: 51.75 },
  { name: "Cambridge", longitude: 0.12, latitude: 52.2 },
  { name: "UCL", longitude: -0.134, latitude: 51.524 },
  { name: "AUC", longitude: 31.5, latitude: 30.02 },
  { name: "GUC", longitude: 31.41, latitude: 29.97 },
  { name: "U of Toronto", longitude: -79.39, latitude: 43.66 },
  { name: "Melbourne", longitude: 144.96, latitude: -37.8 },
];

export default function UniversityMap() {
  return (
    <div className="rounded-[16px] overflow-hidden" style={{ height: "280px" }}>
      <Map
        theme="dark"
        center={[20, 20]}
        zoom={0.8}
        interactive={false}
        attributionControl={false}
      >
        {UNIVERSITIES.map((uni) => (
          <MapMarker key={uni.name} longitude={uni.longitude} latitude={uni.latitude}>
            <MarkerContent>
              <div className="flex flex-col items-center">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "#FFC53A" }}
                >
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1l2.5 5 5.5.8-4 3.9.9 5.3L8 13.3 3.1 16l.9-5.3-4-3.9L5.5 6z" fill="#001B25" />
                  </svg>
                </div>
                <MarkerLabel
                  position="bottom"
                  className="text-white text-[9px] font-medium mt-0.5"
                >
                  {uni.name}
                </MarkerLabel>
              </div>
            </MarkerContent>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}
