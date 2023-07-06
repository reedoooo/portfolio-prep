import React from "react";
import { Box, Container, Button, Link, useBreakpointValue } from "@chakra-ui/react";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "./Particle";
import pdf from "../../assets/reedVogtResume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = pdf || "./reedVogtResume.pdf";

function ResumeNew() {
  // const [width, setWidth] = useState(1200);
  const scale = useBreakpointValue({ base: 0.6, md: 1.7 });

  // useEffect(() => {
  //   if(window && window.innerWidth) {
  //     setWidth(window.innerWidth);
  //   }
  // }, []);

  return (
    <>
      <Box minH="100vh" />
      <Container maxW="container.xl" centerContent>
        {Particle && <Particle />}
        <Box textAlign="center" my={5}>
          <Link href={resumeLink} isExternal>
            <Button colorScheme="blue" leftIcon={<AiOutlineDownload />} variant="solid" size="lg">
              Download CV
            </Button>
          </Link>
        </Box>
        <Box display="flex" justifyContent="center">
          {resumeLink && (
            <Document file={resumeLink}>
              <Page pageNumber={1} scale={scale} />
            </Document>
          )}
        </Box>
        <Box textAlign="center" my={5}>
          <Link href={resumeLink} isExternal>
            <Button colorScheme="blue" leftIcon={<AiOutlineDownload />} variant="solid" size="lg">
              Download CV
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
}

export default ResumeNew;
