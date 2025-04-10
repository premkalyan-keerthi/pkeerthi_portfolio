import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [iterate, setIterate] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    if (text === "") {
      setIsDeleting(false);
      setText("W");
    }
    let ticker = setTimeout(() => {
      tick();
    }, 200);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (!isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row xs={6} xl={6} className="fullStackdev">
          <Col xs={12} md={6} xl={7} className="portfolioDev">
            <span className="tagline"> Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Full Stack `}
              <span className="wrap"> {text}</span>
            </h1>
            <p style={{ fontWeight: "bold" }}>
              5+ years of professional experience in the development and
              implementation of web applications using React, HTML5, CSS,
              JavaScript, Java, Python, SQL, ES6, and Restful API. Capable of
              adapting and learning the latest technologies with an ability to
              find balanced technical solutions to business problems.
            </p>
            <button
              className="icons-style"
              onClick={() => {
                window.open("mailTo:premkalyan52@gmail.com");
              }}
            >
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
