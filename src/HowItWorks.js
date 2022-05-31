import React from "react";
import { Card, Container, Button, Row, Col, Image } from "react-bootstrap";
import "./HowItWorks.css";
import co2Icon from "../src/images/co2Icon.png";
import India from "../src/images/India.png";
import climesProjects from "../src/images/climesProjects.png";
import earth from "../src/images/earth.png";
import neutraliseCarbonMan from "../src/images/neutraliseCarbonMan.png";
import calculatedWithVerifiedSources from "../src/images/calculatedWithVerifiedSources.jpg";
function HowItWorks() {
  return (
    <Container className="py-4">
      <Row className="px-2 ">
        <Col xs={3}></Col>
        <Col xs={9}>
          <Row className="py-3">
            <Col xs={8}></Col>
            <Col xs={4}>
              <Col className="neutralise__emissions  py-2 px-4 justify-content-end text-center">
                NEUTRALISE EMISSIONS
              </Col>
            </Col>
          </Row>

          <Row className="ml-4">
            <Container xs={12} fluid className="mar__left ml-4 mr-1 px-4">
              <Card
                className="ml-4 mr-1"
                style={{ border: "1px solid lightgrey" }}
              >
                <Card.Header as="h5" className="HowItWorks__title">
                  How it works
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <Row className=" d-flex">
                      <Col xs={2} className="py-4 px-2">
                        <Image src={co2Icon} width={90} height={80} />
                      </Col>

                      <Col xs={1} className="font__large px-3">
                        1
                      </Col>
                      <Col xs={9} className="py-4 px-2 text-left">
                        <h6
                          className="padding__text px-2 mx-2"
                          // style={{ fontSize: "25px" }}
                        >
                          Plane release co2 when they fly
                        </h6>
                        <h6 className="font__small px-2 mx-2">
                          Emiisions harm the environment and intensify climate
                          change
                        </h6>
                      </Col>
                    </Row>

                    <Row className=" d-flex">
                      <Col xs={2} className="py-4 px-2">
                        <Image src={India} width={90} height={80} />
                      </Col>

                      <Col xs={1} className="font__large px-3">
                        2
                      </Col>
                      <Col xs={9} className="py-4 px-2 text-left">
                        <h6 className="padding__text px-2 mx-2">
                          We show you the carbon footprint of your flight
                        </h6>
                        <h6 className="font__small px-2 mx-2">
                          For, instance a flight from Delhi to London emits an
                          estimated 750 kgs of carbon emissions
                        </h6>
                      </Col>
                    </Row>

                    <Row className=" d-flex">
                      <Col xs={2} className="py-4 px-2">
                        <Image src={climesProjects} width={90} height={80} />
                      </Col>

                      <Col xs={1} className="font__large px-3">
                        3
                      </Col>
                      <Col xs={9} className="py-4 px-2 text-left">
                        <h6 className="padding__text px-2 mx-2">
                          Neutralise your emissions by supporting a certified
                          carbon project
                        </h6>
                        <h6 className="font__small px-2 mx-2">
                          Choosee from globally certified carbon avoidance and
                          removal projects in our portfolio
                        </h6>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Row>
        </Col>
      </Row>

      <Row className="py-4" style={{ marginBottom: "-44px" }}>
        <Container fluid className="mx-4 p-4">
          <Row>
            <Col>
              <Card xs={6} className="d-flex card__shadow">
                <Row>
                  <Col xs={4}>
                    <Card.Img src={earth} className="py-2 mx-2" />
                  </Col>
                  <Col xs={8}>
                    <Card.Body>
                      <Card.Text>
                        Join our growing community of limate heroes.
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col>
              <Card xs={6} className="d-flex card__shadow">
                <Row>
                  <Col xs={3}>
                    <Image
                      src={calculatedWithVerifiedSources}
                      width={60}
                      height={60}
                      className="p-auto m-4"
                    />
                  </Col>
                  <Col xs={9}>
                    <Card.Body>
                      <Card.Text>
                        Calculated with globally verified sources.
                        <h6
                          style={{
                            color: "#E2B7FF",
                            fontSize: "small",
                          }}
                        >
                          Details on our source here!
                        </h6>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col>
              <Card xs={6} className="d-flex card__shadow">
                <Row>
                  <Col xs={3}>
                    <Image
                      src={neutraliseCarbonMan}
                      width={80}
                      height={70}
                      className="p-2 my-3 mx-3"
                    />
                  </Col>
                  <Col xs={9}>
                    <Card.Body>
                      <Card.Text className="text-secondary font-bold">
                        1kg of carbon emission is neutralised by every ₹ donated
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default HowItWorks;
