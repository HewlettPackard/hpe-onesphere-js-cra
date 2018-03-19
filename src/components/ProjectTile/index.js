import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import { ProjectLabel, ProjectTileLayout } from './styles';

export const ProjectTile = ({ id, name, description, total }) =>
  <ProjectTileLayout>
    <Box
      pad='medium'
      colorIndex='light-2'
    >
      <Heading
        tag="h3"
        strong
        margin="none"
      >
        {name}
      </Heading>
      <ProjectLabel
        uppercase
        margin="none"
      >
        id: {id}
      </ProjectLabel>
      <Paragraph
        margin="small"
      >
        {description}
      </Paragraph>
      <Paragraph margin="small">
        Total deployments: {total}
      </Paragraph>
    </Box>
  </ProjectTileLayout>;

ProjectTile.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  total: PropTypes.number
};

export default ProjectTile;
