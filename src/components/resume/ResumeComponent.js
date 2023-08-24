import React from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
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
    <>
      <PDFViewer file={resumeLink} scale={scale} />
      <ButtonContainer
        resumeLink={resumeLink}
        buttonIcon={<AiOutlineDownload />}
        buttonText="Download CV"
      />
    </>
  );
}

export default ResumeComponent;
