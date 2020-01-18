import React, { FC } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text, lat, lng }) => <div></div>;

type Location = {
    lat: number,
    lng: number,
}
interface MapProps {
    center: Location
    zoom: number
}
const MapContainer : FC<MapProps> = (props) => {
   
    const apiKey = process.env.REACT_APP_API_KEY;
       
    return (
        <div style={{ height: '350px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="I'm here!"
          />
        </GoogleMapReact>
      </div>

    );
}

export default MapContainer;