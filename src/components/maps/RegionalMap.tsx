import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
  GeoJSON,
  useMap,
} from "react-leaflet";
import type { FeatureCollection } from "geojson";

import "leaflet/dist/leaflet.css";

/* =========================================================
   LOCATIONS
========================================================= */

const locations = [
  {
    name: "Lusaka",
    country: "Zambia",
    coordinates: [-15.4167, 28.2833] as [number, number],
    primary: true,
  },
  {
    name: "Ndola",
    country: "Zambia",
    coordinates: [-12.9587, 28.6366] as [number, number],
    primary: false,
  },
  {
    name: "Lilongwe",
    country: "Malawi",
    coordinates: [-13.9626, 33.7741] as [number, number],
    primary: true,
  },
  {
    name: "Blantyre",
    country: "Malawi",
    coordinates: [-15.7861, 35.0058] as [number, number],
    primary: false,
  },
];

const COUNTRY_DATA_URL =
  "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

/* =========================================================
   MAP VIEW
========================================================= */

function FitRegion() {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(
      [
        [-19.0, 21.5],
        [-8.0, 36.5],
      ],
      {
        padding: [24, 24],
      },
    );
  }, [map]);

  return null;
}

/* =========================================================
   REGIONAL MAP
========================================================= */

export default function RegionalMap() {
  const [countryData, setCountryData] = useState<FeatureCollection | null>(
    null,
  );

  useEffect(() => {
    let active = true;

    async function loadCountries() {
      try {
        const response = await fetch(COUNTRY_DATA_URL);

        if (!response.ok) {
          throw new Error("Failed to load country boundaries");
        }

        const data = (await response.json()) as FeatureCollection;

        const selected = data.features.filter((feature) => {
          const properties = feature.properties ?? {};

          const name = properties.name ?? properties.ADMIN ?? properties.NAME;

          return name === "Zambia" || name === "Malawi";
        });

        if (active) {
          setCountryData({
            type: "FeatureCollection",
            features: selected,
          });
        }
      } catch (error) {
        console.error("Unable to load country boundaries:", error);
      }
    }

    loadCountries();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="relative isolate z-0 h-[400px] w-full overflow-hidden bg-[#F2F2F2] md:h-[480px]">
      <MapContainer
        center={[-13.8, 30.5]}
        zoom={5}
        scrollWheelZoom={false}
        zoomControl={true}
        className="h-full w-full"
        style={{
          background: "#F2F2F2",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {countryData && (
          <GeoJSON
            data={countryData}
            style={(feature) => {
              const properties = feature?.properties ?? {};

              const name =
                properties.name ?? properties.ADMIN ?? properties.NAME;

              return {
                color: "#000000",
                weight: 2,
                opacity: 0.9,
                fillColor: name === "Malawi" ? "#E50069" : "#000000",
                fillOpacity: 0.2,
              };
            }}
          />
        )}

        {locations.map((location) => (
          <CircleMarker
            key={location.name}
            center={location.coordinates}
            radius={location.primary ? 8 : 6}
            pathOptions={{
              color: "#FFFFFF",
              weight: 2,
              fillColor: "#E50069",
              fillOpacity: 1,
            }}
          >
            <Tooltip direction="top" offset={[0, -8]}>
              <strong>{location.name}</strong>
              <div>{location.country}</div>
            </Tooltip>
          </CircleMarker>
        ))}

        <FitRegion />
      </MapContainer>

      <div className="pointer-events-none absolute bottom-6 left-5 z-[500] border border-[#E5E2DA] bg-white/95 px-4 py-3 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#4A4A47]">
          Regional presence
        </p>

        <p className="mt-1 text-sm font-semibold text-black">Zambia & Malawi</p>
      </div>
    </div>
  );
}
