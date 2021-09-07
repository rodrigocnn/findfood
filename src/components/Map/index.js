import React, { useState, useContext, useEffect } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { AppContext } from '../../App';

export const MapContainer = (props) => {
  const [map, setMap] = useState(null);
  const { setEstaurants } = useContext(AppContext);
  const { google , search } = props;

  useEffect(()=>{
    if(search){
      searchByQuery(search)
    }
  }, [search])

  function searchByQuery(search) {

    const service = new google.maps.places.PlacesService(map);
    console.log('Service', service);
    const request = {
      location: map.center,
      radius: '200',
      type: ['restaurant'],
      name: search
    };

    service.search(request, (results, status) => {
      if (status === 'OK') {
       console.log('Perto de Você Encontrou', results)
      } else {
        // eslint-disable-next-line no-console
        console.log('deu ruim');
      }
    });
  }

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === 'OK') {
        setEstaurants(results);
      } else {
        // eslint-disable-next-line no-console
        console.log('deu ruim');
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <div style={{ height: '100vh', width: '1000px' }}>
      <Map
        onReady={onMapReady}
        onRecenter={onMapReady}
        zoom={14}
        google={google}
        initialCenter={{
          lat: -12.1482,
          lng: -44.9925,
        }}
      />
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
