import React, { FC } from 'react';
import GoogleMapReact from 'google-map-react';

type Location = {
  lat: number;
  lng: number;
};

interface MapProps {
  center: Location;
  zoom: number;
}

const MapContainer: FC<MapProps> = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY || '';

  return (
    <div style={{ height: '350px', width: '100%' }}>
      {/* @ts-ignore - google-map-react types incompatible with React 18 */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      />
    </div>
  );
};

export default MapContainer;
