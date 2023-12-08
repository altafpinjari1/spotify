import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/footer.css";
import logo from "../assets/logo.png";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import fb from "../assets/face.svg";

const Footer = () => {
  return (
    <div className="footer-main">
      <footer className="bg-black text-light py-5">
        <Container>
          <Row>
            <Col md={2}>
              {/* <h5>Column 1</h5>
            <ul className="list-unstyled">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul> */}
              <img height="40" src={logo} alt="" />
            </Col>
            <Col md={2}>
              <h6 className="footer-name">COMPANY</h6>
              <ul className="list-unstyled">
                <li>About</li>
                <li>Jobs</li>
                <li>For the Record</li>
              </ul>
            </Col>
            <Col md={2}>
              <h5 className="footer-name">COMMUNITIES</h5>
              <ul className="list-unstyled">
                <li>For Artists</li>
                <li>Developers</li>
                <li>Advertising</li>
                <li>Investors</li>
                <li>Vendors</li>
              </ul>
            </Col>
            <Col md={2}>
              <h5 className="footer-name">USEFUL LINKS</h5>
              <ul className="list-unstyled">
                <li>Support</li>
                <li>Web Player</li>
                <li>Free Mobile App</li>
              </ul>
            </Col>
            <Col md={2} className="d-flex flex-column align-items-center">
              <div className="circles">
                <div className="circle">
                  <img src={insta} alt="" />
                </div>
                <div className="circle">
                  <img src={twitter} alt="" />
                </div>
                <div className="circle">
                  <img src={fb} alt="" />
                </div>
              </div>
              <div></div>
            </Col>
          </Row>
          <Row className="second-ftr">
            <Col md={8}>
              <Row>
                <Col>
                  <h6 className="last-ftr">Legal</h6>
                </Col>
                <Col>
                <h6 className="last-ftr">Privacy Center</h6>
                </Col>
                <Col>
                <h6 className="last-ftr">Privacy Policy</h6>
                </Col>
                <Col>
                <h6 className="last-ftr">Cookies</h6>
                </Col>
                <Col>
                <h6 className="last-ftr">About Ads</h6>
                </Col>
                <Col>
                <h6 className="last-ftr">Accessiblity</h6>
                </Col>
                <Col>
                <h6 className="last-ftr">Notice At Collection</h6>
                </Col>
                <Col>
                <h6 className="last-ftr">Cookies Setting</h6>
                </Col>
                {/* Add more columns (2-8) as needed */}
              </Row>
            </Col>

            
            <Col md={4} className="text-right">
                <h6 className="last-ftr2">© 2023 Spotify AB</h6>
                </Col>
           
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;







// const LastFooter = () => {
//   return (
//     <div className='last-footer-main'>
//       <footer className="bg-light py-3">



