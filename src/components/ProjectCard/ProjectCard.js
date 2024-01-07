import { Col } from "react-bootstrap";
import "./ProjectCard-styles.css";
import navIcon3 from "../../assets/img/nav-icon5.png";
import demoicon from "../../assets/img/demo.png";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  github,
  liveLink,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="links">
            <a href={github} aria-label="Github Profile">
              <img className="icon" src={navIcon3} alt="Github" />
            </a>
            <a href={liveLink} aria-label="Github Profile">
              <img className="live" src={demoicon} alt="Github" />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
