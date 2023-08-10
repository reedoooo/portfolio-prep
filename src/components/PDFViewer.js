// PdfViewer.js
import React from 'react';
import { Document, Page } from 'react-pdf';
import { Box } from '@chakra-ui/react';

const PDFViewer = ({ file, scale }) => (
  <Box display="flex" justifyContent="center">
    {file && (
      <Document file={file}>
        <Page pageNumber={1} scale={scale} />
      </Document>
    )}
  </Box>
);

export default PDFViewer;
