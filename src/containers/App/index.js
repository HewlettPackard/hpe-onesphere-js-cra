// (C) Copyright 2017-2018 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import GrommetApp from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';

class App extends Component {
  render() {
    return (
      <GrommetApp centered={false}>
        <Header
          pad={{
            horizontal: 'medium'
          }}
          colorIndex='neutral-1'
        >
          <Title>
            HPE OneSphere Custom App
          </Title>
        </Header>
        <Box
          pad='medium'
        >

        </Box>
      </GrommetApp>
    );
  }
}

export default App;
