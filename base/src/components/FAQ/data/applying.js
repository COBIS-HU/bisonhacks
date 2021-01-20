import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Applying = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <label>Who can attend this hackathon?</label>
                    <p> You must be the following: </p>
                    <ul>
                        <li>
                            18 years old or older.
                        </li>
                        <li>Enrolled as a student in a 2-year or 4-year undergraduate program at a university or college.</li>
                    </ul>
                    <p>We will be checking for student IDs and driver's licenses that provide your date of birth. International students are invited to apply and attend, but we cannot guarantee full travel reimbursement. </p>
                </Col>
                <Col>
                    <label>Are walk-ins welcomed?</label>
                    Due to the location we are only allowed to have attendees who have registered for the hackathon. Therefore, if you are interested attending this event please register through Eventbrite.
                </Col>
                <Col>
                    <label>Are high school and graduate students welcomed to attend?</label>
                    <p>Bison Hack's is open to undergrate students only. Students who are in high school or graduate school are not allowed to participate in Bison Hacks. </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Applying;
