import React from "react";
import {Col, Row, Container} from "react-bootstrap";

const Mentor = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <label>Do I have to have a technological background in order to be a mentor?</label>
                    <p>Although, it is ideal but it is not a requirement. We welcome anyone who have experience in entrepreneurship, marketing, finance and technology.</p>
                </Col>
                <Col>
                    <label>I am interested in being a mentor, how do I sign up to be one?</label>
                    <p>That is great! We welcome any help! To sign up as a mentor you can simply select "Mentor" on the registration form.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>What are the roles of a mentor?</label>
                    <p>The role of a "Tech" or "Business" mentor is to be floating resources for the duration of the hackathon. This means helping teams define workflow, brainstorm ideas, problem solve and develop the final presentation. Mentors are free to communicate amongst themselves on questions of observations that occur. As organizers, we would be glad to gain some insight on technical issues, hackathon dynamics, or other Bison Hacks materials. Here are a few pointers to keep in mind as a Bison Hacks mentor:</p>
                    <ul>
                        <li> <b>Be available for participants</b>. Participants will contact mentors that they believe will be able to address their questions. Responding to teams questions is not a 24/7 responsibility, but please do check the communication channels and get back to the participants in a reasonable time frame. Within the Eventbrite link, there are 4-hour time slots, that mentors can choose.</li>
                        <li> <b>Offer what you know</b>. It is best to acknowledge that you are not well-versed in the subject than to point teams down a sub-optimal path. If you are unable to answer the question it is fine giving the team some online resources or refer them to another mentor that may specialize in the area of interest.</li>
                        <li> <b>You are a mentor</b>. It may be tempting but mentors are not allowed to join or contribute to a team. That includes writing a few lines of code or writing a couple bullets on their pitch decks. Providing pointers, references to examples and advice about design concepts are all in-bounds of the role of a mentor.</li>
                        <li> <b>Share questions and answers</b>. Bison Hacks is a learning hackathon and we feel that every team can benefit from questions asked and answered on team-to-mentor interactions. We strongly encourage to summarize questions/answers for posting to the whole group of participants. As we approach the kick-off date, the Bison Hacks Team will announce how information can be shared amongst participants and how mentors should publish to the communication channels.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
export default Mentor


