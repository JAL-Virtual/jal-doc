import React from 'react';
import ReactMapGL, { Source, Layer, NavigationControl, FullscreenControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYnVubnlwaWxvdHMiLCJhIjoiY21kOW54ZHhqMDFsNTJrc2JybHV4MHY2eSJ9.H2bHJMN644R4Hdgb91wAOQ';

const borderGeoJSON = {
  "type": "Feature",
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [61.210817,35.650072],[62.230651,35.270664],[62.984662,35.404041],[63.193538,35.857166],
      [63.982896,36.007957],[64.546479,36.312073],[64.746105,37.111818],[65.588948,37.305217],
      [65.745631,37.661164],[66.217385,37.39379],[66.518607,37.362784],[67.075782,37.356144],
      [67.83,37.144994],[68.135562,37.023115],[68.859446,37.344336],[69.196273,37.151144],
      [69.518785,37.608997],[70.116578,37.588223],[70.270574,37.735165],[70.376304,38.138396],
      [70.806821,38.486282],[71.348131,38.258905],[71.239404,37.953265],[71.541918,37.905774],
      [71.448693,37.065645],[71.844638,36.738171],[72.193041,36.948288],[72.63689,37.047558],
      [73.260056,37.495257],[73.948696,37.421566],[74.980002,37.41999],[75.158028,37.133031],
      [74.575893,37.020841],[74.067552,36.836176],[72.920025,36.720007],[71.846292,36.509942],
      [71.262348,36.074388],[71.498768,35.650563],[71.613076,35.153203],[71.115019,34.733126],
      [71.156773,34.348911],[70.881803,33.988856],[69.930543,34.02012],[70.323594,33.358533],
      [69.687147,33.105499],[69.262522,32.501944],[69.317764,31.901412],[68.926677,31.620189],
      [68.556932,31.71331],[67.792689,31.58293],[67.683394,31.303154],[66.938891,31.304911],
      [66.381458,30.738899],[66.346473,29.887943],[65.046862,29.472181],[64.350419,29.560031],
      [64.148002,29.340819],[63.550261,29.468331],[62.549857,29.318572],[60.874248,29.829239],
      [61.781222,30.73585],[61.699314,31.379506],[60.941945,31.548075],[60.863655,32.18292],
      [60.536078,32.981269],[60.9637,33.528832],[60.52843,33.676446],[60.803193,34.404102],
      [61.210817,35.650072]
    ]]
  }
};

export default function ContingencyMap() {
  const [viewport, setViewport] = React.useState({
    latitude: 34.5,
    longitude: 67.5,
    zoom: 5.1,
    width: '100%',
    height: '100%'
  });

  return (
    <div style={{ height: "80vh", minHeight: 500, width: "100%", position: "relative" }}>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={setViewport}
      >
        {/* FIR (Afghanistan) border only */}
        <Source id="afg-border" type="geojson" data={borderGeoJSON}>
          <Layer
            id="border"
            type="line"
            paint={{
              'line-color': '#fff',
              'line-width': 2
            }}
          />
        </Source>

        {/* Controls top-right, smaller and more inside */}
        <div style={{
          position: "absolute",
          top: 18,
          right: 40,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end"
        }}>
          <div style={{
            marginBottom: 5,
            boxShadow: "0 1.5px 6px #0007",
            borderRadius: 6,
            overflow: "hidden"
          }}>
          </div>
          <div style={{
            boxShadow: "0 1.5px 6px #0007",
            borderRadius: 6,
            overflow: "hidden"
          }}>
            <NavigationControl
              showCompass={true}
              showZoom={true}
              visualizePitch={false}
              style={{
                background: "#fff",
                borderRadius: 6,
                boxShadow: "none",
                width: 32,
                height: 104
              }}
            />
          </div>
        </div>
      </ReactMapGL>
    </div>
  );
}
