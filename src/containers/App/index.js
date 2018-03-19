// (C) Copyright 2017-2018 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import GrommetApp from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Session from '../Session';
import Projects from '../Projects';
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
            <Projects
              render={
                ({ isLoading, data, error }) => (
                  <Box
                    direction='row'
                    wrap
                  >
                    {data && !isLoading && data.members.length &&
                      data.members.map(project =>
                        <ProjectTile
                          {...project}
                          total={project.deployments.total}
                        />
                      )
                    }
                    {isLoading && 
                      'It\'s loading!'
                    }
                    { error && !isLoading &&
                      error.toString()
                    }
                  </Box>
                )
              }
            />
          </Box>
          <Box>
            <Session
              render={
                ({ isLoading, data, error }) => (
                  <div>
                    {data && !isLoading &&
                      <SessionDetails
                        session={data.session}
                        user={data.user}
                      />
                    }
                  </div>
                )
              }
            />
          </Box>
        </Box>
      </GrommetApp>
    );
  }
}

export default App;
