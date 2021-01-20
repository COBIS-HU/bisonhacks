import React from "react";
import {Col, Row, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Sponsor = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <label>How do I sponsor this event?</label>
                    <p>First! Thank you for wishing to sponsor our hackathon! To sponsor our event you can view our sponsorship package here and send an email to <b>bisonhacks@gmail.com</b>.</p>
                </Col>
                <Col>
                    <label>What does the funds cover for this event?</label>
                    <p>The funds goes towards food, prizes and the swag for the hackathon. We go into more detail within our sponsorship package <Link to={'http://bisonhacks.com/docs/BisonHacks%202020%20Sponsorship%20Information.pdf'}>here</Link>.</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Sponsor

