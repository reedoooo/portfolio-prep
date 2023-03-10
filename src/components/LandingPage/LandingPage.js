import { Container } from "react-bootstrap";

const Landingpage = () => {
  return (
    <Container className="frame-container" h="100vh" w="100vw" bg="gray.200">
      <div className="iframe-div">
        <iframe
          className="frame"
          title="hello"
          style={{
            padding: "none",
            left: "0",
            top: "0",
            width: "100vw",
            height: "100vh",
          }}
          src={"https://prosperous-nature-455718.framer.app/"}
        />
        {/* <Center h='100%' w='100%' bg='tomato'> */}
        {/* <Circle h='100%' w='100%'> */}
        {/* hello */}
        {/* </Circle> */}
        {/* </Center> */}
      </div>
    </Container>
  );
};

export default Landingpage;
