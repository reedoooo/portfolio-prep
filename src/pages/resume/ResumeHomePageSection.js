// ResumeHomePageSection.js
import React from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import Particle from '../utils/Particle';
import PDFViewer from '../../components/PDFViewer';
import ButtonContainer from '../../components/buttons/ButtonContainer';
import { pdfjs } from 'react-pdf';
import pdf from '../../assets/Reed_Vogt_Resume.pdf';
import SectionContainer from '../utils/SectionContainer';
import HeaderCreator from '../utils/HeaderCreator';

function ResumeHomePageSection() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const resumeLink = pdf || './Reed_Vogt_Resume.pdf';

  const scale = useBreakpointValue({ base: 0.6, md: 1.7 });

  return (
    <SectionContainer id="resume-home-page-section">
      <Box>
        {HeaderCreator('resume')}
        {Particle && <Particle />}
        <Box mt={'2vh'}>
          <PDFViewer file={resumeLink} scale={scale} />
          <ButtonContainer resumeLink={resumeLink} buttonText="Download CV" />
        </Box>
      </Box>
    </SectionContainer>
  );
}

export default ResumeHomePageSection;
