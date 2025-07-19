import React, { useEffect, useState } from "react";
import ReactMapGL, { Source, Layer, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import pointOnFeature from "@turf/point-on-feature";

const MAPBOX_TOKEN = "pk.eyJ1IjoiYnVubnlwaWxvdHMiLCJhIjoiY21kOXZ5anloMDNtNzJqcjJ3cWpyazN2MiJ9.bwmDOkazEb_OP7Dv3J1xXw";

const restrictedICAOs = [ "OLBB", "OJAC", "ORBB", "OIIX", "OSTT", "ZKKP" ];
const excludedICAOs = [ "UCFM", "UAAA", "UACN", "UCFO", "UTDD", "UTTR", "UTSD", "UBBA", "UTAA", "UTAT", "UAII", "UTTR", "UATI", "UTAK", "UBBA", "UTAV", "UGGG", "UDDD", "UBAA", "UBAA-S"];

function isRestricted(icao) {
  if (!icao) return false;
  if (excludedICAOs.includes(icao)) return false;
  if (icao.startsWith("U")) return true;
  if (restrictedICAOs.includes(icao)) return true;
  return false;
}

export default function NoFlyAreasMap() {
  const [firGeoJson, setFirGeoJson] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 36,
    longitude: 45,
    zoom: 3.6,
    width: "100%",
    height: "80vh",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/vatsimnetwork/vatspy-data-project/v2507.1/Boundaries.geojson")
      .then((res) => res.json())
      .then((data) => {
        const filteredFeatures = data.features.filter(
          (f) =>
            isRestricted(f?.properties?.id) ||
            isRestricted(f?.properties?.icao)
        );
        const filtered = { ...data, features: filteredFeatures };
        setFirGeoJson(filtered);
      })
      .catch((err) => setError("Failed to fetch FIR GeoJSON: " + err.message));
  }, []);

  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!firGeoJson)
    return (
      <div
        style={{
          minHeight: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading FIR boundaries...
      </div>
    );

  return (
    <div style={{ width: "100%", minHeight: 500, position: "relative" }}>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={setViewport}
      >
        <Source id="no-fly-firs" type="geojson" data={firGeoJson}>
          <Layer
            id="no-fly-fill"
            type="fill"
            paint={{
              "fill-color": "#b60000",
              "fill-opacity": 0.33,
              "fill-outline-color": "#b60000",
            }}
          />
          <Layer
            id="no-fly-outline"
            type="line"
            paint={{
              "line-color": "#b60000",
              "line-width": 2,
            }}
          />
        </Source>
        <div style={{ position: "absolute", top: 10, right: 40 }}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    </div>
  );
}
