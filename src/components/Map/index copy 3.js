import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const MapComponent = ({ text }) => <div>{text}</div>;

const Branch = () => {
  const [coordinates, setCoordinates] = useState({
    lat: -12.1354656,
    lng: -38.4665778,
  });

  return (
    <div>
      <div style={{ height: '100vh', width: '1000px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={coordinates}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals>
          <MapComponent lat={coordinates.lat} lng={coordinates.lng} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Branch;


