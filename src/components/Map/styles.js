import React from 'react';
import styled from 'styled-components';
import Box from 'grommet/components/Box';

export const MapMarker = styled(({ children, ...rest }) =>
  <Box
    {...rest}
    justify='center'
  >
    {children}
  </Box>)`
  height: 70px;
  width: 70px;
  border-radius: 100px;
  background-color: ${(props) => props.status === 'ok' ? 'green' : 'red' };
  color: white;
  font-size: 14px;
  text-align: center;
  animation: ${(props) => props.status === 'ok' ? 'none' : 'test 1s linear infinite alternate' };

  @keyframes test {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;
