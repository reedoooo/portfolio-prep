// ResumeHomeContainer.js
import React from "react";
import { Container } from "@chakra-ui/react";
import Particle from "../../pages/resume/Particle";
import ResumeHomeComponent from "../../components/resume/ResumeHomeComponent";

function ResumeHomeContainer() {
  // const [width, setWidth] = useState(1200);

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
		<Container
		maxW="container.xl"
		fluid="true"
		className="resume-section justify-content-center align-items-center"
	>
      {Particle && <Particle />}
      <ResumeHomeComponent />
    </Container>
  );
}

export default ResumeHomeContainer;
