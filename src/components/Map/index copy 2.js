import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';


const MapComponent = ({ text }) => <div>{text}</div>;

const Branch = () => {
  const [coordinates, setCoordinates] = useState({
    lat: -33.4369331,
    lng: -70.6366235,
  });
  return (
    <div className="branch-main">
      <div className="branch-map">
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
