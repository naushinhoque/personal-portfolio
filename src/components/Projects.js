import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Ant Crusher",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Debugger",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Flags Of The World",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Ant-Crusher:<br/>
                          An immersive, interactive game designed to entertain users by simulating a virtual ant-squashing experience. This engaging application showcases a vibrant user interface created using React.js and leverages Redux for seamless state management. Crafted with game logic intricacies such as ant animations, scoring mechanisms, and timer functionalities, Ant-Crusher maximizes user engagement and provides an enjoyable and competitive experience.<br></br>

                           Flags of the World:<br/>
                           A visually enriching educational web app offering an exploration of global flags. Built using React.js and Axios to fetch and display data from a RESTful API, this application provides an interactive platform for users to learn and discover flags from diverse cultures. The design emphasizes adaptable components and effective state management via React hooks, ensuring an engaging and informative experience.<br></br>

                           React Debugger:<br/>
                          A comprehensive debugging and monitoring tool tailored specifically for React applications. This tool streamlines the debugging process, enhancing development efficiency within the React ecosystem. This feature-rich application leverages React.js to craft an intuitive user interface, emphasizing visual hierarchy and user experience. By integrating performance monitoring tools, it allows real-time tracking of crucial metrics, sophisticated state management functionalities, event monitoring mechanisms, and an interactive component hierarchy visualization, empowering users with powerful debugging and problem-solving capabilities.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="color-sharp2" />
    </section>
  );
};