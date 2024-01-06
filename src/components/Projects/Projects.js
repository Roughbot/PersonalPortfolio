import "./Projects-styles.css";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import pro1 from "../../assets/img/project-img2.png";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import colorsharp2 from "../../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "E-commercee Website",
      description: "Design and develop an e-commerce website",
      imgUrl: pro1,
    },
    {
      title: "E-commercee Website",
      description: "Design and develop an e-commerce website",
      imgUrl: pro1,
    },
    {
      title: "E-commercee Website",
      description: "Design and develop an e-commerce website",
      imgUrl: pro1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content align-items-center"
                id="pilld-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Coding profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Certifications</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Coding Profile</Tab.Pane>
                <Tab.Pane eventKey="Third">Certification</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorsharp2} alt="backimg" />
    </section>
  );
};
