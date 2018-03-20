import React from 'react';
import Box from 'grommet/components/Box';
import GoogleMap from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
      <AnyReactComponent lat={59.955413} lng={30.337844} text={'A'} />
    </GoogleMap>
  </Box>;

export default Map;
