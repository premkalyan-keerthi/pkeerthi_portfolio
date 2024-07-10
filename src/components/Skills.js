import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p style={{ textAlign: 'center' }}><strong>Programming Languages:</strong> JavaScript, Python, Java, SQL, C.<br/>
                            <strong>Frameworks & DB:</strong> ReactJs, NodeJs, ExpressJs, MongoDB, MySQL, Bootstrap <br/><strong>Technologies:</strong> REST APIs, System
                            Design, NodeJs, OOPS Concepts, Docker, HTML5, CSS, AWS. <br/><strong>Others:</strong> GitHub, Postman, Linux, Agile, Jenkins,
                            SonarQube.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image"/>
                                    <h5> Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5> Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"/>
                                    <h5> Logo Design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )  
}

export default Skills;