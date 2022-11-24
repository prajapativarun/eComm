import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { baseUrl } from "../../Helper";

const NavBar = () => {
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .post(`${baseUrl}/api/v1/category/list`, {
        where: {
          isActive: true,
        },
        pagination: {
          sortBy: "createdAt",
          descending: true,
          rowsPerPage: 1000,
          page: 1,
        },
      })
      .then((res) => {
        console.log(res.data.data.list);
        setData(res?.data.data.list);
      })
      .catch();
  };
  return (
    <div>
      <Navbar expand="lg" className="p-3 navbor">
        <Container fluid>
          <Navbar.Brand href="#">
            <b>बड़ा-बाजाR.</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action1">Shop</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                {data.map((item, e) => {
                  return (
                    <div key={e}>
                      <NavDropdown.Item>{item.categoryName}</NavDropdown.Item>
                    </div>
                  );
                })}
              </NavDropdown>

              <NavDropdown title="Language" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action7">
                  English - EN
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">हिंदी - HI</NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                  ગુજરાતી - GU
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                  español - ES
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                  Deutsch - DE
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">한국어 - KO</NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                  الترجمة - AR
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                  português - PT
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action8">
                  Change Currency
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">Link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Account" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Purchase History
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Password & Security
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="secondary">Search</Button> */}
            </Form>
            <Nav>
              <Nav.Link href="#action2" title="WishList">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </Nav.Link>
              <Nav.Link href="#" title="Cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </Nav.Link>
              <Nav.Link title="Inbox">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-open"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
                </svg>
              </Nav.Link>
              <Nav.Link title="Customer Care">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-headset"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                </svg>
              </Nav.Link>
              <Nav.Link title="My Profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
