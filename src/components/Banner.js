import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/logo512.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "ReactJs Developer", "System Administrator"];
  const period = 300;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div className="animate__animated animate__fadeIn">
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 className="fix">{`Hi! I'm Charaf, a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>As a versatile developer, administrator, and DevOps professional, I bring a broad range of technical expertise and experience to every project. With skills in C, ReactJS, Docker, Ansible, VirtualBox, Cisco, Windows, Linux, and IT maintenance and security, I have the knowledge and tools needed to deliver exceptional results. Whether building front-end applications or managing systems and networks, I am committed to optimizing performance, reliability, and security. So if you're looking for a developer and administrator who can streamline workflows, automate processes, and improve efficiency, look no further.</p>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
            <div className="rotating-image">
                  <img src={headerImg} alt="Header Img"/>
            </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
