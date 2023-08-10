import React from 'react';
import {
  Box,
  Button,
  Flex,
  Link,
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { Document, Page } from 'react-pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import pdf from '../../assets/Reed_Vogt_Resume.pdf';
import PDFViewer from '../PDFViewer';
import { pdfjs } from 'react-pdf';
import ButtonContainer from '../buttons/ButtonContainer';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = pdf || './Reed_Vogt_Resume.pdf';

function ResumeComponent() {
  const scale = useBreakpointValue({ base: 0.5, md: 1.6 });

  return (
    <Box as="section">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        my={5}
        // minHeight="100vh"
        // width="100%"
        flexDirection="column"
      >
        <Link href={resumeLink} isExternal></Link>
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
        <PDFViewer file={resumeLink} scale={scale} />
        <ButtonContainer
          resumeLink={resumeLink}
          buttonIcon={<AiOutlineDownload />}
          buttonText="Download CV"
        />
      </Flex>
    </Box>
  );
}

export default ResumeComponent;
