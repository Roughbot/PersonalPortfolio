import { Row, Container, Col } from "react-bootstrap";
import "./Skills-styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import python from "../../assets/img/python-icon.svg";
import webDev from "../../assets/img/web-development-icon.png";
import java from "../../assets/img/java-icon.svg";
import datastr from "../../assets/img/data-structures.png";
import cyber from "../../assets/img/cyber-security.png";
import next from "../../assets/img/Next.js.svg";
import node from "../../assets/img/nodejs.svg";
import react from "../../assets/img/react-js.svg";
import mongodb from "../../assets/img/mongo-db.png";
import colorSharp from "../../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={python} alt="python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={java} alt="java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={react} alt="reactjs" />
                  <h5>Reactjs</h5>
                </div>
                <div className="item">
                  <img src={cyber} alt="cyber-security" />
                  <h5>Cyber Security</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Nodejs" />
                  <h5>NodeJs</h5>
                </div>
                <div className="next">
                  <img src={next} alt="nextjs" />
                  <h5>NextJs</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Mongodb" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={datastr} alt="data-structure" />
                  <h5>Data Structures</h5>
                </div>
                <div className="item">
                  <img src={webDev} alt="web-develpoment" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp}
        className="background-image-left"
        alt="background-pic"
      />
    </section>
  );
};
