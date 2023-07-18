// ResumeHomePage.js
import React from 'react';
import { Flex, useMediaQuery } from '@chakra-ui/react';
import ResumeHomeContainer from '../../containers/resume/ResumeHomeContainer';

function ResumeHomePage() {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

  return (
    <Flex
      direction="column"
      alignItems="center"
      justify="center"
      minHeight="100vh"
      px={isLargerThan900 ? 0 : 5}
      py={10}
    >
      <ResumeHomeContainer />
    </Flex>
  );
}

export default ResumeHomePage;
