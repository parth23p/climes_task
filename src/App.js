import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Image, Col, Form, Button } from "react-bootstrap";
import TopNavigation from "./TopNavigation";
import EmissionInfo from "./EmissionInfo";
import HowItWorks from "./HowItWorks";
import Projects from "./Projects";
import Details from "./Details";

function App() {
  return (
    <>
      <Container>
        <TopNavigation />
        <Details />
      </Container>
      <div className="py-3 " style={{ backgroundColor: "#F5F2F7" }}>
        <EmissionInfo />
      </div>
      <div className="mx-1">
        <HowItWorks />
      </div>
      <div
        className="py-3 "
        style={{ backgroundColor: "#F5F2F7", marginTop: "-80px" }}
      >
        <Projects />
      </div>
    </>
  );
}

export default App;
