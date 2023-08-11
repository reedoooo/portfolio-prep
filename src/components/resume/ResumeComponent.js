import React from 'react';
import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineDownload } from 'react-icons/ai';
import pdf from '../../assets/Reed_Vogt_Resume.pdf';
import PDFViewer from '../PDFViewer';
import { pdfjs } from 'react-pdf';
import ButtonContainer from '../buttons/ButtonContainer';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = pdf || './Reed_Vogt_Resume.pdf';

function ResumeComponent() {
  const scale = useBreakpointValue({ base: 0.5, md: 1.6 });
  const bgColor = useColorModeValue('white', 'gray.800');
  // const bgColor = 'customColors.translucentQuaternary50';
  const color = useColorModeValue('gray.800', 'white');

  return (
    <Box
      as="section"
      pt={{ base: '3rem', md: '5rem' }}
      pb={{ base: '2rem', md: '3rem' }}
      bg={bgColor}
      color={color}
    >
      <Container maxW="container.lg">
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Text
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            textAlign="center"
            mb="5"
          >
            Resume
          </Text>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            bg={bgColor}
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            w="100%"
          >
            <PDFViewer file={resumeLink} scale={scale} />
            <ButtonContainer
              resumeLink={resumeLink}
              buttonIcon={<AiOutlineDownload />}
              buttonText="Download CV"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default ResumeComponent;
