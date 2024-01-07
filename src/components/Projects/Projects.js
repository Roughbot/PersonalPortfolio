import "./Projects-styles.css";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import pro1 from "../../assets/img/project-img2.png";
import pro0 from "../../assets/img/project-img0.png";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import colorsharp2 from "../../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "Design and developed a E-commerce Website using React Js.",
      imgUrl: pro0,
      github: "https://github.com/Roughbot/e-commerce-cloth-shop",
      liveLink: "https://earnest-palmier-3593ae.netlify.app/",
    },
    {
      title: "E-commercee Website",
      description: "Design and develop an e-commerce website",
      imgUrl: pro1,
      github: "",
      liveLink: "",
    },
    {
      title: "E-commercee Website",
      description: "Design and develop an e-commerce website",
      imgUrl: pro1,
      github: "",
      liveLink: "",
    },
  ];

  return (
    <section className="project" id="projects">
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
                <Tab.Pane eventKey="second">
                  <img
                    src="https://tryhackme-badges.s3.amazonaws.com/CyberHoX.png"
                    alt="TryHackMe"
                  ></img>
                </Tab.Pane>
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
