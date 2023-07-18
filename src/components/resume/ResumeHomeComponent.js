// ResumeHomeComponent.js
import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Center, VStack, useBreakpointValue } from '@chakra-ui/react';
import pdf from '../../assets/reedVogtResume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = pdf || './reedVogtResume.pdf'; // if pdf is null, use the default link

function ResumeHomeComponent() {
  const scale = useBreakpointValue({
    base: 0.5,
    sm: 0.6,
    md: 1,
    lg: 1.4,
    xl: 1.7,
  });

  return (
    <>
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
    </>
  );
}

export default ResumeHomeComponent;
