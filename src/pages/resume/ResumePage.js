import React from "react";
import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";
import { pdfjs } from "react-pdf";
import NavBar from "../../components/headings/navbar/Navigation";
import ResumeContainer from '../../containers/resume/ResumeContainer';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: {
          _hover: {
            boxShadow: "xl",
          },
        },
      },
    },
  },
});

function ResumePage() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <NavBar />
      <ResumeContainer />
    </ChakraProvider>
  );
}

export default ResumePage;
