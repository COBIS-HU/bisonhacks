import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import Schools from "./data/schools";
import Race from './data/race';
import Classification from './data/classification';
import Prize from './data/prize';
import Gender from './data/gender';


const Stats = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <Schools/>
                </Col>
                <Col>
                    <Gender/>
                </Col>
                <Col>
                    <Prize/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Classification/>
                </Col>
                <Col>
                    <Race/>
                </Col>
                <Col>
                    <p>For the past 5 years....</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Stats;
