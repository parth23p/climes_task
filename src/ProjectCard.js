import React from "react";
import {
  Card,
  Container,
  Button,
  Row,
  Col,
  Image,
  CardGroup,
} from "react-bootstrap";
import "./ProjectCard.css";
import projectImage from "../src/images/projectImage.png";
import E_WEB_Goal_16_1 from "../src/images/E-WEB-Goal-16-1.png";
import E_WEB_Goal_16_2 from "../src/images/E-WEB-Goal-16-2.png";
import E_WEB_Goal_16_3 from "../src/images/E-WEB-Goal-16-3.png";
function ProjectCard() {
  return (
    <Col xs={4} className="border__rounded">
      <Card className="bg-white border__rounded shadow-lg">
        <Card.Img variant="top" src={projectImage} className="img-fluid" />
        <Card.ImgOverlay className="text-white">
          <div className="mb-2 mx-1">
            <h5 style={{ fontWeight: "bolder" }}>
              Bararan Hydro Electric Project
            </h5>
            <p>By KKK Hydropower Ltd</p>
          </div>
        </Card.ImgOverlay>

        <Card.Body>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={1}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#3c0164"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </Col>

                <Col xs={10} className="font__small">
                  Village Patlikuhl in Kullu District, Himachal Pradesh
                </Col>
              </Row>
              <Row className="py-2 my-1">
                <Col xs={1}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#3c0164"
                    class="bi bi-patch-check"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                  </svg>
                </Col>

                <Col xs={6} className="font__small">
                  Certified Project
                </Col>
                <Col xs={4} className="learn__more">
                  Learn More
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="cardBody__break px-1  mx-1"></Row>
          <Card.Title className="text__purple font__bold mx-1 ">
            Benefits
          </Card.Title>
          <Card.Text>
            <Row>
              <Col xs={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#3c0164"
                  className="bi bi-check2-square font__bold"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                </svg>
              </Col>
              <Col className="py-1">
                <h6 className="text__purple"> Fosters Economic Well being.</h6>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#3c0164"
                  className="bi bi-check2-square font__bold"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                </svg>
              </Col>
              <Col className="py-1">
                <h6 className="text__purple"> Encourages rural development</h6>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#3c0164"
                  className="bi bi-check2-square font__bold"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                </svg>
              </Col>
              <Col className="py-1">
                <h6 className="text__purple"> Clean enery generation</h6>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#3c0164"
                  className="bi bi-check2-square font__bold"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                </svg>
              </Col>
              <Col className="py-1">
                <h6 className="text__purple"> Promotes rural enterprise</h6>
              </Col>
            </Row>
            <Row className="py-2 mr-3">
              <Col xs={2}></Col>
              <Col xs={8} className="px-4 ml-3">
                <Row>
                  <Col xs={4} className="px-1">
                    <Image src={E_WEB_Goal_16_1} />
                  </Col>
                  <Col xs={4} className="px-1">
                    <Image src={E_WEB_Goal_16_2} />
                  </Col>
                  <Col xs={4} className="px-1">
                    <Image src={E_WEB_Goal_16_3} />
                  </Col>
                </Row>
              </Col>
              <Col xs={2}></Col>
            </Row>
            <Row className="py-2 mr-3">
              <Col xs={2}></Col>
              <Col xs={8} className="px-4 ml-3">
                <Row>
                  <Col className="contribute__project py-2 text-center px-2">
                    Contribute to Project
                  </Col>
                </Row>
              </Col>
              <Col xs={2}></Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;
