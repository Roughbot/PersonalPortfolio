import { Col, Container, Row } from "react-bootstrap";
import "./Footer-styles.css";
import logo from "../../assets/img/hox.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon3 from "../../assets/img/nav-icon5.png";
import navIcon2 from "../../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="logo">
            <img src={logo} alt="logo" />
          </Col>
          <Col className="copyRights" sm={6}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sathyanarayananpramod/">
                <img src={navIcon1} alt="LinkedIN" />
              </a>
              <a href="https://www.instagram.com/hox_the_artist/">
                <img src={navIcon2} alt="Instagram" />
              </a>
              <a href="https://github.com/Roughbot">
                <img src={navIcon3} alt="Github" />
              </a>
            </div>
            <p>CopyRight 2024. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
