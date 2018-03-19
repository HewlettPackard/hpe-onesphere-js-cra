import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

export const SessionDetails = ({ session, user }) =>
  <Box>
    <Heading
      tag="h3"
      margin="small"
    >
      Session Details
    </Heading>
      {session &&
        <Paragraph>
          token: {session.token}
        </Paragraph>
      }
      {!session &&
        <Paragraph>
          loading session details...
        </Paragraph>
      }
    <Heading
      tag="h3"
      margin="small"
    >
      User Details
    </Heading>
      {user
        ? <Paragraph>
          id: {user.id}
          email: {user.email}
          role: {user.role}
        </Paragraph>
        : <Paragraph>Loading user details...</Paragraph>
      }
  </Box>;

SessionDetails.propTypes = {
  session: PropTypes.shape({
    token: PropTypes.string,
    userUri: PropTypes.string
  }),
  user: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string,
    uri: PropTypes.string,
    role: PropTypes.string
  })
};

export default SessionDetails;
