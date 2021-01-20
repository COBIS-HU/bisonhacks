import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const General = ()=> {
    return (
        <Container>
            <Row>
                <Col>
                    <label>What is a hackathon?</label>
                    <p>A hackathon is a weekend long event where you go all the way from idea to prototype. At the end of BisonHacks, you will pitch your app, website, or whatever prototype you dreamed up, and compete for prizes! Hackathons are a great place to learn quickly and create something awesome.</p>
                </Col>
                <Col>
                    <label>How much does it cost?</label>
                    <p>BisonHacks is completely free for all registered participants! The food is free and all the awesome swag is free.</p>
                </Col>
                <Col>
                    <label>What should I bring?</label>
                    <p>Bring you, your computer, computer charger, toiletries (toothbrush and toothpaste), and anything else for your hack.</p>
                </Col>
                <Col>
                    <label>Will there be food?</label>
                    <p>Absolutely! We have four delicious meals planned with plenty of snacks in between to keep you going for 24 hours.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>This is my first hackathon!</label>
                    <p>You're more than welcome at BisonHacks! We will have workshops during the event and mentors to help you through any troubles. So no matter what your skill level is, we will provide the resources to help you learn.</p>
                </Col>
                <Col>
                    <label>Do you have a Code of Conduct?</label>
                    <p>Yes! Check out our <Link to={'http://bisonhacks.com/docs/Code%20Of%20Conduct.pdf'}>Code of Conduct.</Link></p>
                </Col>
            </Row>
        </Container>
    )
}

export default General;
