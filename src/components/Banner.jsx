import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const periode = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = is Deleting ? fullText.subs
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Charaf`}<span className="wrap">web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ante dictum, varius leo et, eleifend sem. Nam condimentum diam eget feugiat fer.</p>
                        <button onClick={() => {console.log('connect')}}>Let's connect!<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={} alt="Header Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}