import React from 'react';
import Box from 'grommet/components/Box';
import GoogleMap from 'google-map-react';
import { MapMarker } from './styles';

export const Map = () =>
  <Box
    style={{width: '100%', height: '400px'}}
  >
    <GoogleMap
      defaultCenter={{lat: 39.01, lng: -35.22}}
      defaultZoom={3}
      bootstrapURLKeys={{
        key: 'AIzaSyDgtA0J280tQymNqBB8Qd3It3nxIDulKh8'
      }}
    >
      <MapMarker lat={46.955413} lng={2.337844} status="ok">
        France East 1
      </MapMarker>
      <MapMarker lat={46.955413} lng={3.337844} status="bad">
        France East 2
      </MapMarker>
    </GoogleMap>
  </Box>;

export default Map;
