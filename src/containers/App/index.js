// (C) Copyright 2017-2018 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import GrommetApp from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import SessionDetails from '../../components/SessionDetails';
import ProjectTile from '../../components/ProjectTile';

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
          direction='row'
        >
          <Box flex>
            <Heading
              strong
              tag='h2'
            >
              Projects
            </Heading>
            <Box
              direction='row'
              wrap
            >
              <ProjectTile
                id='314cc8e58d3a4da18f822c20d0acf51d'
                name='name'
                description='description is kind of long sometimes..'
                total={3}
              />
              <ProjectTile
                id='314cc8e58d3a4da18f822c20d0acf51d'
                name='name'
                description='description is kind of long sometimes..'
                total={3}
              />
              <ProjectTile
                id='314cc8e58d3a4da18f822c20d0acf51d'
                name='name'
                description='description is kind of long sometimes..'
                total={3}
              />
              <ProjectTile
                id='314cc8e58d3a4da18f822c20d0acf51d'
                name='name'
                description='description is kind of long sometimes..'
                total={3}
              />
              <ProjectTile
                id='314cc8e58d3a4da18f822c20d0acf51d'
                name='name'
                description='description is kind of long sometimes..'
                total={3}
              />
              <ProjectTile
                id='314cc8e58d3a4da18f822c20d0acf51d'
                name='name'
                description='description is kind of long sometimes..'
                total={3}
              />
              <ProjectTile
                id='314cc8e58d3a4da18f822c20d0acf51d'
                name='name'
                description='description is kind of long sometimes..'
                total={3}
              />
            </Box>
          </Box>
          <SessionDetails />
        </Box>
      </GrommetApp>
    );
  }
}

export default App;
