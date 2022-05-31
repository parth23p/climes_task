import React from "react";
import { Card, Container, Button, Row, Col, Image } from "react-bootstrap";
import "./EmissionInfo.css";
import wallet from "../src/images/wallet.png";
import climesC from "../src/images/climesC.png";
import lamp from "../src/images/lamp.png";
import gift from "../src/images/Vectorgift.png";

function EmissionInfo() {
  return (
    <Container>
      <Row>
        <Col xs={4}></Col>
        <Col xs={8} className="p-auto m-auto text__purple p-2 mx-auto">
          Your One-way Economy flight ticket from Pune to Dubai emits 189kgs of
          carbon emission.
          <Row className="p-3">
            <Col xs={6}>
              <Card
                className="bx__shadow py-1"
                style={{ borderRadius: "8px", border: "none" }}
              >
                <Card.Body>
                  <Card.Text>
                    <Row>
                      <Col className="d-flex justify-content-center ">
                        <Image
                          src={wallet}
                          width={60}
                          height={70}
                          className="mx-1"
                        />
                        <h5 className="text-left py-3 text__purple">
                          Climes To be Collected
                        </h5>
                        <div className="text-center p-auto m-auto">
                          <h1 className="text__purple d-flex">
                            189
                            <Image
                              src={climesC}
                              width={21}
                              height={21}
                              className="my-2"
                            />
                          </h1>
                        </div>
                      </Col>
                    </Row>
                    <Row className="underline__purple px-2 mx-1"></Row>
                    <Row className="d-flex justify-content-center">
                      <Col className="p-auto ">
                        <h6 className="mx-1 text__lightPurple">
                          To be invested
                        </h6>
                        <h6 className="mx-1">₹ 189</h6>
                      </Col>

                      <Col className="p-auto m-auto">
                        <h6 className="text__lightPurple">Date Collected</h6>
                        <h6 className="">21 Feb' 22</h6>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6}>
              <h6 className="text__purple text-center">
                Travel and live sustainably
              </h6>

              <Row
                className="bg-white"
                style={{ border: "none", borderRadius: "8px" }}
              >
                <Col
                  xs={2}
                  style={{ border: "none", borderRadius: "8px" }}
                  className="p-auto m-auto d-flex "
                >
                  {/* <Col xs={4}> */}
                  <Image
                    src={lamp}
                    width={35}
                    height={43}
                    className="py-1 mx-2"
                  />
                </Col>
                <Col xs={10} className="py-2 ">
                  <h6 className="text__purple">
                    Neutralisisng a DEL to LON flight is equivalent to X hours
                    of electricity saved.
                  </h6>
                </Col>
                {/* </Card> */}
              </Row>

              <Row
                className="bg-white my-2"
                style={{ border: "none", borderRadius: "8px" }}
              >
                <Col
                  xs={2}
                  style={{ border: "none", borderRadius: "8px" }}
                  className="p-auto m-auto d-flex "
                >
                  {/* <Col xs={4}> */}
                  <Image
                    src={gift}
                    width={39}
                    height={36}
                    className="py-1 mx-2"
                  />
                </Col>
                <Col xs={10} className="py-2 ">
                  <h6 className="text__purple">
                    Climes rewards you for flying carbon neutral with exclusive
                    offers from sustainable brands.
                  </h6>
                </Col>
                {/* </Card> */}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default EmissionInfo;
