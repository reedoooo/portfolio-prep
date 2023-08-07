import React from 'react';
import Particle from './Particle';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import pdf from './Reed_Vogt_Resume.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import {
  Button,
  Center,
  Container,
  Flex,
  VStack,
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = pdf || './Reed_Vogt_Resume.pdf'; // if pdf is null, use the default link

function ResumeComponent() {
  // const [width, setWidth] = useState(1200);
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  const scale = useBreakpointValue({
    base: 0.5,
    sm: 0.6,
    md: 1,
    lg: 1.4,
    xl: 1.7,
  });

  // useEffect(() => {
  //   if (window && window.innerWidth) {
  //     setWidth(window.innerWidth);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (window && window.innerWidth) {
  //     setWidth(window.innerWidth);
  //   }
  // }, []);

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        minHeight="100vh"
        // bg="gray.100"
        // backgroundImage='var(--section-background-color) !important'
        px={isLargerThan900 ? 0 : 5}
        py={10}
      >
        <Container
          maxW="container.xl"
          // minW={width * 0.9}
          // maxW={width}
          fluid
          className="resume-section justify-content-center align-items-center"
        >
          {Particle && <Particle />}
          <Center p={4}>
            {resumeLink && (
              <Document file={resumeLink}>
                <Page pageNumber={1} scale={scale} />
              </Document>
            )}
          </Center>
          <VStack spacing={4} align="center">
            <Button
              leftIcon={<AiOutlineDownload />}
              href={resumeLink}
              colorScheme="teal"
              size="lg"
              variant="solid"
              target="_blank"
              style={{ maxWidth: '250px' }}
            >
              &nbsp;Download CV
            </Button>
          </VStack>
        </Container>
      </Flex>
    </>
  );
}

export default ResumeComponent;
