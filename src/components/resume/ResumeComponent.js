import React from 'react';
import { Box, Button, Flex, Link, useBreakpointValue } from '@chakra-ui/react';
import { Document, Page } from 'react-pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import pdf from '../../assets/reedVogtResume.pdf';

const resumeLink = pdf || './reedVogtResume.pdf';

function ResumeComponent() {
  const scale = useBreakpointValue({ base: 0.6, md: 1.7 });

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        my={5}
      >
        <Link href={resumeLink} isExternal>
          <Button
            colorScheme="blue"
            leftIcon={<AiOutlineDownload />}
            variant="solid"
            size="lg"
            borderRadius="xl"
          >
            Download CV
          </Button>
        </Link>
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        bg="white"
        p={8}
        borderRadius="2xl"
        boxShadow="xl"
        w="100%"
      >
        {resumeLink && (
          <Document file={resumeLink}>
            <Box alignItems="center" justifyContent="center">
              <Page pageNumber={1} scale={scale} />
            </Box>
          </Document>
        )}
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        my={5}
      >
        <Link href={resumeLink} isExternal>
          <Button
            colorScheme="blue"
            leftIcon={<AiOutlineDownload />}
            variant="solid"
            size="lg"
            borderRadius="xl"
          >
            Download CV
          </Button>
        </Link>
      </Flex>
    </>
  );
}

export default ResumeComponent;
