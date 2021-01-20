import React from "react";
import {Col, Row, Container} from "react-bootstrap";

const Rules = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <label>How many students per a team?</label>
                    <p>There can be a minimum of 3 and a maximum of 5 students per a team.</p>
                </Col>
                <Col>
                    <label>What if I can't find a team?</label>
                    <p>That is fine, you have the option to work alone but we highly recommend that you work in a team.</p>
                </Col>
                <Col>
                    <label>What are the requirements for a team?</label>
                    <p>Teams are encouraged to have a mix of business, engineering, and design oriented students. Diversity is encouraged. However, teams are required to choose a name.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>What are the requirementes for the project?</label>
                    <p>Team projects can be brainstormed beforehand, but code <b>MUST</b> be written at the event only. Code cannot be brought in from outside the event . Cheating of any kind will not be tolerated. The project must contain a README within the repository that describes the project.</p>
                </Col>
                <Col>
                    <label>What are some tools that we can use within our project?</label>
                    <p>You can use any tool, API, service or language for your team project.</p>
                </Col>
                <Col>
                    <label>How long are presentations for our project?</label>
                    <p>A 3 min presentation is required during judging, explaining and demonstrating the team’s application. In addition 1 minute will be allowed for questions.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>What are the items that are not permitted in our projects?</label>
                    <p>Projects must not contain any advertisement or solicitation. Projects must not contain anything that is or may be construed as:</p>
                    <ul>
                        <li>Threatening, harassing, degrading or hateful.</li>
                        <li>Defamatory.</li>
                        <li>Fraudulent or tortious.</li>
                        <li> Obscene, indecent or otherwise objectionable; or (v) protected by copyright, trademark or other proprietary right without the express prior consent of the owner of such right.</li>
                    </ul>
                    <p>Projects must not contain any material that would give rise to criminal or civil liability or that encourages conduct that constitutes a criminal offense; and Projects must otherwise comply in all respects with these Rules and the Policies.</p>

                </Col>
                <Col>
                    <label>Where do we submit our project?</label>
                    <p>All projects must be submitted into our Bison Hacks DevPost by February 28, {new Date().getFullYear()} at 1:30PM.</p>
                </Col>
                <Col>
                    <label>What format can our team project be?</label>
                    <p>Your project can be a mobile application, web application or IoT project. The project must fit into the theme set for the event.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>How many judges will be at this hackathon?</label>
                    <p>We will have 4-5 judges for this hackathon. Our judges will be key members within the DC Tech Industry. Their backgrounds will cover technology, design, marketing and entrepreneurship.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>What are the judging criterias?</label>
                    <ul>
                        <li> <b>Business Model</b>. Outside of technical impressiveness in the project, during this hackathon judges will be looking for how teams communicate customer validation (Who are your users?) and acquisition strategy (How will you attract your users?). Those two pillars will help validate the idea. </li>
                        <li> <b>Impact</b>. Our theme this year is to create a solution that will help improve the betterment of the DMV community. In this category we are looking for key factors that shows how the team's idea is scalable and give a clear measure as to how thier solution makes an impact on the user's life.</li>
                        <li> <b>Technical</b>. In the midst of the given 24 hours the judges will be looking for an established minimum viable product and a working prototype . This can range from a web application, mobile application or an IoT.</li>
                        <li> <b>Design and User Experience</b>. The teams final minimum viable product and prototype should achieve an engaging and memorable user experience. This means having a clear interface that is intuitive for users that come from different backgrounds.</li>
                        <li> <b>Presentation</b>. Teams will be rated base off presentation layout and articulation of their solution. This means how well was the team able to communicate their target audience, problems they are solving and how their product is the solution to that problem.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
export default Rules














