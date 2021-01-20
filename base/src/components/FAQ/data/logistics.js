import React from "react";
import {Col, Row, Container} from "react-bootstrap";

const Logistics = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <label>Will there be free parking provided?</label>
                    <p>Unfortunately, there won't be free parking but only street parking.</p>
                </Col>
                <Col>
                    <label>Is there any travel reimbursement?</label>
                    <p>Unfortunately, we will not be offering individual travel reimbursement this year.</p>
                </Col>
                <Col>
                    <label>What are the closest Metro's to this location?</label>
                    <p>To travel to this location the closest metros are Shaw and U Street.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Will there be other activities other than hacking at this event?</label>
                    <p>Of course! This year, our hacker experience team has planned a bunch of fun events for attendees to relax. Stay tuned for more info! We will have a small activity in the midst of the event.</p>
                </Col>
                <Col>
                    <label>Do I have to be there for the entire hackathon?</label>
                    <p>Due to the security of the building it would be ideal that you stay for the entire event. However, if you need to leave and comeback please inform the Hackathon Organizers.</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Logistics;






