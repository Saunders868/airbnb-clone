import { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: -100,
    latitude: 40,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/saunders868/cl9h8p80m003g14p782b77e70"}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}

export default Map;
