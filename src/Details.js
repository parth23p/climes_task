import React from "react";
import "./Details.css";
import {
  Row,
  Container,
  Image,
  Col,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import bgAirplane from "../src/images/bg-airplane.jpg";
import airPlane from "../src/images/air-plane.png";
function Details() {
  return (
    <Container>
      <Card style={{ border: "none" }}>
        <Card.Img src={bgAirplane} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Footer
            style={{ border: "none" }}
            className="text-center img__text"
          >
            Carbon Neutralise Your Flights
          </Card.Footer>
        </Card.ImgOverlay>
      </Card>
      <Row className="d-flex justify-content-center">
        <Col xs={4}>
          <Image
            fluid
            rounded
            src={airPlane}
            style={{
              marginTop: "-111px",
              height: "22rem",
              position: "relative",
            }}
          />
        </Col>
        <Col xs={8}>
          <Row>
            <Form className="d-flex p-4 mx-4">
              <Col xs={6} className="flight__search">
                <div className="flight__searchContainer px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    className="bi bi-geo-alt-fill mx-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <input type="text" placeholder="PNQ" />
                </div>
              </Col>
              <div
                className="rounded-circle bg-light py-1 px-2 my-2 border"
                style={{
                  margin: "0px -20px",
                  zIndex: "999",
                  border: "1px solid gray",
                }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="gray"
                    class="bi bi-arrow-left-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                </div>
              </div>
              <Col xs={6} className="flight__search">
                <div className="flight__searchContainer px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    className="bi bi-geo-alt-fill mx-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <input type="text" placeholder="DXB" />
                </div>
              </Col>
            </Form>
          </Row>
          <Row>
            <div className="d-flex ">
              <Col xs={12} className="d-flex mx-3">
                <Button className="btn-light mx-3 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    class="bi bi-arrow-left-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                  &nbsp;&nbsp; One-way &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </Button>

                <Button className="btn-light mx-3 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    class="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  &nbsp;&nbsp; 1 &nbsp;&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </Button>
                <Button className="btn-light mx-3 p-2">
                  Economy &nbsp;&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </Button>
                {/* </Col>
                <Col xs={4} className="justify-content-end px-4"> */}
                <Col
                  // xs={12}
                  className="calculate__emissions py-2 text-center justify-content-center"
                  size="lg"
                >
                  CALCULATE EMISSIONS
                </Col>
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
