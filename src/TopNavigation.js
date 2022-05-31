import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar, Container, Button } from "react-bootstrap";
import "./TopNavigation.css";

const TopNavigation = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home" style={{ marginLeft: "-50px" }}>
          <img
            src="https://assets.website-files.com/61f3e32c015e8528cd098501/6231b6c263a155f349453d16_Climes%20_%20Logo%20Transparent%201.png"
            className="d-inline-block align-top mx-auto"
            width="156"
            height="50"
            alt="CLIMES logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end "
          id="responsive-navbar-nav"
        >
          <Nav className="justify-content-end" style={{ marginLeft: "200px" }}>
            <Nav.Link>
              <h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#6800c2"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                &nbsp;&nbsp;Climes.io
              </h5>
            </Nav.Link>
            <Nav.Link>
              <h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-recycle"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
                </svg>
                &nbsp;&nbsp;Collect Climes
              </h5>
            </Nav.Link>
            <Nav.Link>
              <h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  className="bi bi-tree-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5z" />
                </svg>
                &nbsp;&nbsp;Projects
              </h5>
            </Nav.Link>

            <Button className="sign__up mx-auto">SIGN UP</Button>

            <Button className="sign__in mx-auto">SIGN IN</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavigation;
